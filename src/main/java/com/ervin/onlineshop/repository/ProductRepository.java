// ProductRepository.java

package com.ervin.onlineshop.repository;

import com.ervin.onlineshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
