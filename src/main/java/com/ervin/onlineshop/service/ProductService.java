package com.ervin.onlineshop.service;
import org.modelmapper.ModelMapper;

import com.ervin.onlineshop.model.dto.ProductDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface ProductService {
    List<ProductDTO> getAllProducts();
    List<ProductDTO> getLastProducts();
    ProductDTO getProductById(Long id);
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO updateProduct(Long id, ProductDTO productDTO);
    void deleteProduct(Long id);

    String uploadImage(MultipartFile file) throws IOException;
}
