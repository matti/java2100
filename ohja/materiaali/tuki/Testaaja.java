
import java.lang.reflect.Field;


public class Testaaja {

    private static int virheita = 0;


    public static void virhe(String viesti) {
        virheita++;

        System.out.println("Virhe "+virheita+": " + viesti);
    }

    public static void onkoValmis() {
        String viesti = "\n\n--[ Testaaja ]---------------------------------\n";

        if ( virheita > 0 )
            viesti += "Virheitä: " + virheita;
        else
            viesti += "Ei virheitä, tehtävä valmis!";
        

        System.out.println(viesti);
    }

    
    public static void vaadiPerinta(Object o, Class ylaLuokka) {
        
        if ( ! ylaLuokka.isInstance(o))
            Testaaja.virhe("Luokka '" + o.getClass().getName() + "' ei periydy luokasta '"+ylaLuokka.getName()+"'");
    
    }

    
    public static void vaadiRajapinta(Class c, Class vaadittuRajapinta) {
    
        Class implementedInterfaces[] = c.getInterfaces();

        boolean found = false;

        for ( Class iface : implementedInterfaces ) {
            if ( iface == vaadittuRajapinta )
                found = true;
        }

        if ( !found )
            virhe("Luokka '"+ c.getName() + "' ei toteuta rajapintaa '" + vaadittuRajapinta.getName() + "'");
    
    }
    
    
    public static void tarkistaAttribuutit(Class c) {
    
        Field fields[] = c.getDeclaredFields();

        for (Field field : fields) {
            int modifier = field.getModifiers();

            if ( modifier == 0 )
                virhe("Luokan '"+ c.getName() + "' attribuutin '" + field.getName() + "' näkyvyyttä ei ole määritelty");

            if ( modifier == 1 )
                virhe("Luokan '"+ c.getName() + "' attribuutin '" + field.getName() + "' näkyvyys on public");

        }

    }
}
