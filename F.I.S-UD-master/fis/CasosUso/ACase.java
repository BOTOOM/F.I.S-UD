package javaapplication5;

/**
 *
 * @author estudiantes
 */
public abstract class ACase {
		private ACase next;
		protected boolean tieneBreak;		
        public ACase(ACase next) {			
			this.next = next;			
		}
		//////////////////////////////////////////
		public void setICase(ACase ICase){this.next=ICase;}
        public ACase getNextICase(){return next;};  
        //////////////////////////////////////////        
        private boolean hayUnsiguienteCaso() {			
			return next!=null;
		}
    	private void salteAlSiguinteCaso(Object o) {
			next.evaluar(o,tieneBreak);			
			////////////////////////////////
			int a=0;
			switch(a){			
			case 1: /*realiceElCaso*/break;
			case 2: /*realiceElCaso*/break;
			default: /*realiceElCaso*/
			}
			//////////////////////////////////
		}
        
        private void evaluar(Object o,boolean vieneUnBreak){
        	if(esElCaso(o)||vieneUnBreak==false){
        	   realiceElCaso();
        	   if(!tieneBreak){
        		  salteAlSiguinteCaso(o); 
        	   }
        	}else if(hayUnsiguienteCaso()){
        	   salteAlSiguinteCaso(o);
        	}       	
        }
        
        public void evaluar(Object o){
        	evaluar(o,tieneBreak);
        }
        protected boolean esUnaIntanciaDeEstaClase(Object o){
        	return o.getClass().getName().equals(getClass().getName());
        }
        ///////////////////////////////////////////////
        protected abstract boolean esElCaso(Object o);
        protected abstract void realiceElCaso();
	    ///////////////////////////////////////////////		
}
