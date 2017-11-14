package ;
public class AllCondiciones implements Iterato{
private ArrayList data;
private Enumeration ec;
private Condicion nextCondicion;
public  AllCondiciones(){}
public boolean hashNext(){}
public Object next(){}
public void remove(){}
}


package ;
public class Condicion{
private String id;
private boolean estado;
private String descripcion;
public  Condicion(String inp_id,boolean inp_estado,String inp_descripcion){}
}


package ;
public interface Iterato{
/**

*/
boolean hashNext();
/**

*/
Object next();
/**

*/
void remove();
}
