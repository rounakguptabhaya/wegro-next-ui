import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Button from './Button';
import { MdDelete } from "react-icons/md";
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Papa from 'papaparse';
import { parseCsv } from '@/src/helpers/parseCSV';
import * as XLSX from "xlsx";





const WatchList = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [fileName, setFileName] = useState("No file Selected");
  const [selectedFile, setSelectedFile] = useState([]);



  const handleChange = (option) => {
    setSelectedOption(option);
    handleClick(option);
  };

  const handleClick = (option) => {
    if (option) {
      props.addStock(option.value);
      setSelectedOption(null);
    }
  };

//   const getUserWatchList = () => {
//     props.getWatchList();
//   }

  // const handleFile = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   if (file && (file.type === 'application/vnd.ms-excel' || file.type === 'text/csv' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
  //     setSelectedFile(file);
  //   } else {
  //     setSelectedFile(null);
  //     alert('Please select a valid Excel or CSV file.');
  //   }
  // }

  const handleFile = (event) => {
    const file = event.target.files[0];
    console.log(file.type);
    if (file && (file.type === 'application/vnd.ms-excel' || file.type === 'text/csv')) {
      setFileName(file.name);
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setSelectedFile(results.data);
        },
      });
    }else if(file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
      setFileName(file.name);
      const reader = new FileReader();
      reader.readAsBinaryString(event.target.files[0]);
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, {type: "binary"});
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setSelectedFile(parsedData);
      }
    } 
  };

  const handleUpload = async () => {
    console.log(selectedFile.length ? console.log(selectedFile) : console.log("No file Selected"));
    if(selectedFile.length){
      const extension = fileName.split(".")[1];
      // console.log(extension);
      setFileName("No file Selected")
      setSelectedFile([]);
      props.handleUpload(selectedFile);
      // if(extension === 'csv'){
      //   props.handleUpload(selectedFile);
      // }else if(extension === 'xlsx'){
      //   props.handleExcelUpload(selectedFile);
      // }
      
    }
    
  }

  const handleCancel = () => {
    setFileName("No file Selected")
    setSelectedFile([]);
  }

  const handleDelete = (id) => {
    // console.log(id);
    props.deleteCompany(id);
  }

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    props.changeLanguage(selectedLanguage);
  }

  const deleteAll = () => {
    props.onDeleteAll();
  }

  const handleCategory = (category) => {
    props.handleCategory(category);
  }

  const customFilterOption = (option, rawInput) => {
    const inputValue = rawInput.toLowerCase();
    const optionLabel = option.label ? option.label.toLowerCase() : '';
    const optionSymbol = option.symbol ? option.symbol.toLowerCase() : '';
    const optionIsinNumber = option.isinNumber ? option.isinNumber.toLowerCase() : '';
    const optionScripCode = option.scripCode ? option.scripCode.toLowerCase() : '';
    return (
      optionLabel.includes(inputValue) ||
      optionSymbol.includes(inputValue) ||
      optionIsinNumber.includes(inputValue) ||
      optionScripCode.includes(inputValue)
    );
  };

  const options = props.companyList.map(company => ({
    value: company.companyName,
    label: `${company.companyName} (${company.symbol}, ${company.isinNumber}, ${company.scripCode})`,
    symbol: company.symbol,
    isinNumber: company.isinNumber,
    scripCode: company.scripCode
  }));

//   useEffect(() => {
//     getUserWatchList();
//   });

  return (
    <div className="page-wrapper">
      <section className="register-one">
        <div className="auto-container">
          <div className="inner-container">
            <h3>Watchlist</h3>
            <div className="register-form" style={{ position: 'relative' }}>
              <div className="form-group">
                <div className='watchlist-header-container'>
                  {/* <button className='btn-sm' >Upload CAS(.csv or .xls) File</button> */}
                  {/* <button type="button" class="btn btn-secondary btn-sm" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus.">
                      Upload CAS(.csv or .xls) File
                  </button> */}
                  <div className='file-upload-container'>
                    <div className='file-upload-header'>
                      <label className='file-name'>{selectedFile ? fileName : "No file Selected"}</label>   
                      <input type='file' id='upload' onChange={handleFile}/>
                    </div>
                    <div className='file-selected-container'>
                        <div className='file-selected-btn'>
                          <button className='btn-sm' onClick={handleUpload}>Upload</button>4
                          <button className='btn-sm' onClick={handleCancel}>Cancel</button>
                        </div>
                        
                    </div>
                  </div>
                  <select name='languages' id='languages' value={props.defaultLang} onChange={handleLanguageChange}>
                    <option value="1">English</option>
                    <option value="0">Hindi</option>
                  </select>  
                </div>
                
                <Select
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  placeholder="Search Company"
                  filterOption={customFilterOption}
                  styles={{
                    menu: (provided) => ({ ...provided, zIndex: 9999 }) // Set a high z-index value for the dropdown menu
                  }}
                />
              </div>
              {/* <Button onClick={handleClick} name="Add Company" /> */}
              <div className='categories'>
                 {props.categories.map((category,idx) => {
                   return <a key={idx} href='javascript:void(0)' className='category-btn' onClick={() => {handleCategory(category.categoryId)}}>{category.categoryName}</a>
                 })}
                
              </div>

              <div className='your-watchlist'>
                  <div className='watchlist-header-container'>
                    <h5>Your Watchlist {`(${props.total}/500)`}</h5>
                    <a href='javascript:void(0);' onClick={deleteAll}>Delete All</a>
                  </div>
                  
                  {props.watchlist.length > 0 ? 
                  
                  props.watchlist.map((company,idx) => {
                    return(
                        <div key={idx} className='added-stocks watchlist-container'>
                            <div>
                                <p>{company.companyName}</p>
                            </div>
                            <div>
                                <MdDelete className='delete-btn' type='button' onClick={() => {handleDelete(company.companyId)}}/>
                            </div>
                        </div>
                        
                    )
                  })
                  :(
                    <div><p>Nothing in your Watchlist</p></div>
                  )
                  }
              </div>
              
            </div>

            <div className='watchlist-footer'>
                <Link href='/upgradePlan' className='btn-sm'>Upgrade Your Plan</Link>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchList;
