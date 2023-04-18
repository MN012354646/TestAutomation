package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

//How to read excel files using Apache POI
public class DataFile {
	XSSFWorkbook workbook;
     List<String> list = new  ArrayList<String>();
     List<List<String>> listValue = new  ArrayList<List<String>>();
	public List<String> dataFile() throws IOException  {
			FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\DataFile\\data.xlsx");
			workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheetAt(0);
			for (Row row : sheet) {
				for (Cell cell : row) {
					values(cell);
					if(values(cell)==null || values(cell)=="") {
						continue;
						}
					list.add(values(cell));
 				 }
				}
			fis.close();
			return list;
			}
			
	public static String values(Cell cell) {
		String data = null;
		switch (cell.getCellType()) { 
		case STRING: 
				data =  cell.getRichStringCellValue().getString();
				break; 
     		case NUMERIC: 
			    data =  String.valueOf(cell.getNumericCellValue()); 
			default: break;
			}
		return data;
	}
	
	public void subList() throws IOException {
		dataFile();
        int partitionSize = 1;
        List<List<String>> partitions = new ArrayList<>();
        for (int i = 0; i < list.size(); i += partitionSize) {
            partitions.add(list.subList(i, Math.min(i + partitionSize,
            		list.size())));
        }
        System.out.println(partitions);
    }
}


