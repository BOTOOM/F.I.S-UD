public abstract class AFacultad {

public AFacultad m_AFacultad;

public AFacultad(){

}

public void finalize() throws Throwable {

}

public abstract void CantidadCupos();

public abstract void Descripcion();

public abstract void FechaFin();

public abstract void FechaInicio();

}


public class Convocatoria {

public Convocatoria(){

}

public void finalize() throws Throwable {

}

}


public class FacAmbiente extends AFacultad {

public FacAmbiente(){

}

public void finalize() throws Throwable {
super.finalize();
}

public void CantidadCupos(){

}

public void Descripcion(){

}

public void FechaFin(){

}

public void FechaInicio(){

}

}



public class FacCiencias extends AFacultad {

public FacCiencias(){

}

public void finalize() throws Throwable {
super.finalize();
}

public void CantidadCupos(){

}

public void Descripcion(){

}

public void FechaFin(){

}

public void FechaInicio(){

}

}


public class FacIngenieria extends AFacultad {

public FacIngenieria(){

}

public void finalize() throws Throwable {
super.finalize();
}

public void CantidadCupos(){

}

public void Descripcion(){

}

public void FechaFin(){

}

public void FechaInicio(){

}

}


public class FacPosgrados extends AFacultad {

public FacPosgrados(){

}

public void finalize() throws Throwable {
super.finalize();
}

public void CantidadCupos(){

}

public void Descripcion(){

}

public void FechaFin(){

}

public void FechaInicio(){

}

}

public class FacTecnologica extends AFacultad {

public FacTecnologica(){

}

public void finalize() throws Throwable {
super.finalize();
}

public void CantidadCupos(){

}

public void Descripcion(){

}

public void FechaFin(){

}

public void FechaInicio(){

}

}


public class Organizador {

public AFacultad m_AFacultad;

public Organizador(){

}

public void finalize() throws Throwable {

}

}