package com.ervin.onlineshop.service;

import com.ervin.onlineshop.model.dto.OrderDTO;

public interface OrderService {

//    OrderDTO getAllOrders();
    OrderDTO createOrder(OrderDTO orderDTO);

    OrderDTO getOrderById(Long id);

    OrderDTO updateOrder(Long id, OrderDTO orderDTO);

    void deleteOrder(Long id);
    // Ajoutez d'autres méthodes nécessaires pour la gestion des commandes
}
