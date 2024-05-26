package com.ervin.onlineshop.service;

import com.ervin.onlineshop.model.CartItem;
import com.ervin.onlineshop.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

//    public CartItem addCartItem(CartItem cartItem) {
//        return cartItemRepository.save(cartItem);
//    }

    public CartItem addCartItem(CartItem cartItem) {
        CartItem existingCartItem = cartItemRepository.findByProductId(cartItem.getProduct().getId());

        if (existingCartItem != null) {
            existingCartItem.setQuantity(existingCartItem.getQuantity() + cartItem.getQuantity());
            return cartItemRepository.save(existingCartItem);
        } else {
            return cartItemRepository.save(cartItem);
        }
    }

    public void deleteCartItem(Long id) {
        cartItemRepository.deleteById(id);
    }

    public CartItem updateCartItem(Long id, CartItem cartItem) {
        CartItem existingCartItem = cartItemRepository.findById(id).orElseThrow(() -> new NoSuchElementException("CartItem not found"));
        existingCartItem.setQuantity(cartItem.getQuantity());
        return cartItemRepository.save(existingCartItem);
    }

}
