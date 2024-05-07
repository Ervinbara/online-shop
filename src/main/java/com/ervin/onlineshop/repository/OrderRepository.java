package com.ervin.onlineshop.repository;

import com.ervin.onlineshop.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
