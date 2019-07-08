import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String [] args) {
        List<Integer> listeEntier = new ArrayList<Integer>();
        listeEntier.add(5);
        listeEntier.add(12);
        listeEntier.add(17);
        listeEntier.stream().forEach(a-> {System.out.println(a);
        a+=5;
            System.out.println(a);
        });

    }
}
