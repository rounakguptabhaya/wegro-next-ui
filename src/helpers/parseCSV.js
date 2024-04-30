import Papa from 'papaparse';

export async function parseCsv(file){
    
    Papa.parse(file, {
        header: true,
        complete: (results) => {
          return results.data;
        },
      });

}