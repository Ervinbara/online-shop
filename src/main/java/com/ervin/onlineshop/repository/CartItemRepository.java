package com.ervin.onlineshop.repository;

import com.ervin.onlineshop.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByProductId(Long id);
}
