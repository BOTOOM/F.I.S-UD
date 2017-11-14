public class Solicitud{ 
	private Estado state;
	
	
	public void request(){
	state.handle();
	
}
}



public class Aceptado extends Estado{
public void handle(){}
}

public class Rechazado extends Estado{
public void handle(){}
}

public class Revicion extends Estado{
public void handle(){}
}