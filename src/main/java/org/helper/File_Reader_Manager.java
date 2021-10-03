package org.helper;

public class File_Reader_Manager {
	
	
	private File_Reader_Manager() {
//		to restrict to access the class in another class

	
	}
	
	public static File_Reader_Manager filereader() {
		
		File_Reader_Manager f=new File_Reader_Manager();
		
		return f;
		
	
	}
	public Configuration_Reader getconfigure() throws Throwable {
		
		Configuration_Reader c=new Configuration_Reader();
		return c;

	}

}
