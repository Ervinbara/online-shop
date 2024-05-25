package com.ervin.onlineshop.service;

import com.ervin.onlineshop.model.Order;
import com.ervin.onlineshop.model.OrderItem;
import com.ervin.onlineshop.model.Product;
import com.ervin.onlineshop.model.User;
import com.ervin.onlineshop.model.dto.OrderDTO;
import com.ervin.onlineshop.model.dto.OrderItemDTO;
import com.ervin.onlineshop.model.dto.UserDTO;
import com.ervin.onlineshop.repository.OrderItemRepository;
import com.ervin.onlineshop.repository.OrderRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ervin.onlineshop.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;

    private final ModelMapper modelMapper;

    public OrderServiceImpl(OrderRepository orderRepository, ModelMapper modelMapper) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
                .map(order -> modelMapper.map(order, OrderDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public OrderDTO createOrder(OrderDTO orderDTO) {
        // Mapper l'OrderDTO en une entité Order
        Order order = modelMapper.map(orderDTO, Order.class);

        // Vérifiez et associez l'utilisateur à la commande
        User user = userRepository.findById(orderDTO.getUserId()).orElse(null);
        if (user == null) {
            // Gérer l'erreur si l'utilisateur n'est pas trouvé
            // Par exemple, lancer une exception ou renvoyer un message d'erreur
            return null;
        }
        order.setUser(user);

        // Persistez la commande principale en base de données
        Order savedOrder = orderRepository.save(order);

        // Récupérez l'ID de la commande nouvellement créée
        Long orderId = savedOrder.getId();

        // Assurez-vous que les OrderItem sont correctement associés à la commande
        for (OrderItemDTO itemDTO : orderDTO.getOrderItems()) {
            OrderItem orderItem = modelMapper.map(itemDTO, OrderItem.class);
            // Assurez-vous que l'OrderItem est correctement associé à l'Order
            orderItem.setOrder(savedOrder); // Utilisez la commande enregistrée
            orderItemRepository.save(orderItem); // Enregistrez l'OrderItem en base de données
        }
        orderItemRepository.deleteByOrderIdIsNull();

        // Mapper et renvoyer l'objet Order persisté en DTO
        return modelMapper.map(savedOrder, OrderDTO.class);
    }






    @Override
    public OrderDTO getOrderById(Long id) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        return optionalOrder.map(order -> modelMapper.map(order, OrderDTO.class)).orElse(null);
    }

    @Override
    public OrderDTO updateOrder(Long id, OrderDTO orderDTO) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            Order existingOrder = optionalOrder.get();
            modelMapper.map(orderDTO, existingOrder);
            Order updatedOrder = orderRepository.save(existingOrder);
            return modelMapper.map(updatedOrder, OrderDTO.class);
        } else {
            return null;
        }
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    // Ajoutez d'autres méthodes nécessaires pour la gestion des commandes
}
