package fr.thomasschaller.todoserveur;

import javax.persistence.*;
import java.util.List;

@Entity
public class Tache {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String titre;
    private String details;
    private boolean isDone;


    @OneToMany

    private List<Tache> sousTaches;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public List<Tache> getSousTaches() {
        return sousTaches;
    }

    public void setSousTaches(List<Tache> sousTaches) {
        this.sousTaches = sousTaches;
    }

}
