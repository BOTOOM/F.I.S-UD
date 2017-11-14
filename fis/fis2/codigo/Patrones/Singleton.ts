package ;
public class BD{
private static BD instance;
private Connection conexion;
public static BD getInstance(){}
private  BD(){}
public static Connection getConnection(){}
}