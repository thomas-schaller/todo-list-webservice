package fr.thomasschaller.todoserveur.model;

import fr.thomasschaller.todoserveur.model.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long> {
    Account findByLogin(final String login);
}
