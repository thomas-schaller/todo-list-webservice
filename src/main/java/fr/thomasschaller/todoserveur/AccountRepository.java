package fr.thomasschaller.todoserveur;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<Account, Long> {
    public List<Account> findByLogin(final String login);
}
