package fr.thomasschaller.todoserveur;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TacheRepository extends CrudRepository<Tache, Long> {
    public List<Tache> findByTitre(String titre);
}
