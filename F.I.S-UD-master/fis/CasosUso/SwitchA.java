/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication5;

/**
 *
 * @author usuario pc
 */
public class SwitchA{
    
    public void setICase(ACase caso){
        next = caso;
    }
    public void compararObject(Object o){
        
        next.compararObject(o);
    }
    
    public static void main(final String[] args) {
    	ACase a= new ACase(null){
    		int a;
			@Override
			protected void realiceElCaso() {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			protected boolean esElCaso(Object o) {				
				return ((Integer)o) == a;
			}
		};
		
		ACase b= new ACase(null){
			int b;
			@Override
			protected void realiceElCaso() {
			//codigo propi
				
			}			
			@Override
			protected boolean esElCaso(Object o) {
				return ((Integer)o) == b;		
			}
		};
		a.setICase(b);
		a.evaluar(1);
		////////////////////////////////////////////
		ACase a1= new ACase(null){
    		String a="mundo";
			@Override
			protected void realiceElCaso() {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			protected boolean esElCaso(Object o) {				
				return ((String)o) == a || ((String)o).equals(a);
			}
		};
		
		ACase b1= new ACase(null){
			String b="hola";
			@Override
			protected void realiceElCaso() {
			//codigo propi
				
			}			
			@Override
			protected boolean esElCaso(Object o) {
				return ((String)o) == b|| ((String)o).equals(b);		
			}
		};
		
		a1.setICase(b1);
		a1.evaluar("hola");
		
//        int numero=5;
//        String string="Hola";
//        URL url = null;
//        try {
//			url = new URL("http://www.java21days.com");
//		} catch (MalformedURLException e) {
//			e.printStackTrace();
//		}
//        ImageIcon icono;
//        Image imagen;
//        icono=new ImageIcon("./img/img.png");
//        imagen=icono.getImage();
//        ArrayList array = new ArrayList(); 
//        
//        File file = null;
//        try {
//        	file = new File("./img/newFile.txt");
//
//	  	      if (file.createNewFile()){
//	  	        System.out.println("File is created!");
//	  	      }else{
//	  	        System.out.println("File already exists.");
//	  	      }
//        } catch (IOException e) {
//  	      e.printStackTrace();}     
//        
//        SwitchA switchCase = new SwitchA() {};
//        CasoString caso = new CasoString() {};
//        switchCase.setICase(caso); 
//        
//        CasoNumero casoN = new CasoNumero() {};
//        caso.setICase(casoN);
//        
//        CasoURL casoU = new CasoURL() {};
//        casoN.setICase(casoU);
//        
//        CasoImagen casoI = new CasoImagen() {};
//        casoU.setICase(casoI);
//        
//        CasoArray casoA = new  CasoArray() {};
//        casoI.setICase(casoA);
//        
//        CasoFile casoF = new  CasoFile() {};
//        casoA.setICase(casoF);
//        
//        CasoDefault def = new CasoDefault() {};
//        casoF.setICase(def);
//        
//        switchCase.compararObject(casoN);
    }
    
}
