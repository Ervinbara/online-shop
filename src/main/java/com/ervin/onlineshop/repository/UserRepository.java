package com.ervin.onlineshop.repository;

import com.ervin.onlineshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
