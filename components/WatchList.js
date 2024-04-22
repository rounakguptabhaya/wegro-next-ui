// import React, { useState } from 'react';
// import Input from './Input';
// import Button from './Button';

// const WatchList = (props) => {
//   const [value, setValue] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);

//   const handleClick = () => {
//     setValue('');
//     props.addStock(value);
//   };

//   const setCompanyName = (companyName) => {
//     setValue(companyName);
//   };

//   return (
//     <div className="page-wrapper">
//       <section className="register-one">
//         <div className="auto-container">
//           <div className="inner-container">
//             <h3>Watchlist</h3>
//             <div className="register-form">
//               <div className="form-group">
//                 <label>Search Company</label>
//                 <input
//                   type="text"
//                   name="search-company"
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   placeholder="Search Company"
//                   required={true}
//                   onFocus={() => setInputFocused(true)}
//                   onBlur={() => setInputFocused(false)}
//                 />
//                 {inputFocused && (
//                   <div className="search-result">
//                     {props.companyList.length > 0 ? (
//                       props.companyList
//                         .filter((company) => {
//                           const searchTerm = value.toLowerCase();
//                           const companyName = company.companyName.toLowerCase();
//                           const isinNumber = company.isinNumber.toLowerCase();
//                           const symbol = company.symbol.toLowerCase();
//                           const scripCode = company.scripCode.toString().toLowerCase();

//                           return (
//                             companyName !== searchTerm &&
//                             companyName.startsWith(searchTerm) ||
//                             isinNumber.startsWith(searchTerm) ||
//                             symbol.startsWith(searchTerm) ||
//                             scripCode.startsWith(searchTerm)
//                           );
//                         })
//                         .map((company, idx) => {
//                           return (
//                             <div
//                               key={idx}
//                               className="search-item"
//                               onClick={() => {
//                                 setCompanyName(company.companyName);
//                               }}
//                             >
//                               <p>{company.companyName}</p>
//                             </div>
//                           );
//                         })
//                     ) : (
//                       <div className="search-item">
//                         <p>Loading...</p>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 <div className='added-stocks'>
//                     <p>ABB India Limited</p>
//                 </div>
//               </div>
//               <Button onClick={handleClick} name="Add Company" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WatchList;
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Button from './Button';
import { MdDelete } from "react-icons/md";
import Link from "next/link"



const WatchList = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

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
                  <label>Search Company</label>
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
                <Link href='/upgradePlan' className='upgrade-btn'>Upgrade Your Plan</Link>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchList;
