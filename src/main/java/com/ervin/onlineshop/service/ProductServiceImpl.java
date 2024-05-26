package com.ervin.onlineshop.service;

import com.ervin.onlineshop.model.dto.ProductDTO;
import com.ervin.onlineshop.model.Product;
import com.ervin.onlineshop.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductDTO> getLastProducts() {
        // Récupérer les 5 derniers produits par ordre décroissant de leur date de création
        List<Product> products = productRepository.findTop5ByOrderByCreatedAtDesc();
        // Convertir les produits en DTO
        return products.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO getProductById(Long id) {
        // Rechercher le produit par son ID dans la base de données
        Optional<Product> optionalProduct = productRepository.findById(id);

        if (optionalProduct.isEmpty()) {
            // Gérer le cas où le produit n'est pas trouvé
            // Par exemple, vous pourriez lever une exception ou renvoyer null
            return null;
        }

        // Mapper le produit en ProductDTO
        Product product = optionalProduct.get();
        return modelMapper.map(product, ProductDTO.class);
    }


    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        // Convertir le DTO en entité Product
        Product product = modelMapper.map(productDTO, Product.class);

        // Enregistrer le produit dans la base de données
        Product savedProduct = productRepository.save(product);

        // Récupérer le nom de l'image à partir du DTO
        String imageName = product.getId() + "_" + productDTO.getImage(); // Utiliser l'ID du produit pour créer un nom d'image unique

        // Mettre à jour le nom de l'image dans le produit
        savedProduct.setImage(imageName);

        // Enregistrer à nouveau le produit avec le nom de l'image mis à jour
        savedProduct = productRepository.save(savedProduct);

        // Convertir et renvoyer le produit enregistré en DTO
        return modelMapper.map(savedProduct, ProductDTO.class);
    }


    @Override
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        // Vérifier si le produit existe
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            // Gérer le cas où le produit n'existe pas
            // Lever une exception ou renvoyer une réponse appropriée ici
            return null; // Ou lancez une exception NotFound
        }

        // Récupérer le produit existant de la base de données
        Product existingProduct = optionalProduct.get();

        // Mettre à jour les propriétés du produit existant avec les données du DTO
        existingProduct.setName(productDTO.getName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setQuantity(productDTO.getQuantity());
        existingProduct.setStockQuantity(productDTO.getStockQuantity());
        existingProduct.setImage(productDTO.getImage());

        // Enregistrer le produit mis à jour dans la base de données
        Product updatedProduct = productRepository.save(existingProduct);

        // Mapper et renvoyer le produit mis à jour en DTO
        return modelMapper.map(updatedProduct, ProductDTO.class);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public String uploadImage(MultipartFile file) throws IOException {
        // Obtiens le nom du fichier
        String fileName = file.getOriginalFilename();
        // Crée le chemin de stockage du fichier
        String filePath = "C:\\Users\\ervin\\projet\\online-shop\\online-shop\\frontend-online-shop\\frontend-online-shop\\src\\assets\\sneakers\\" + fileName;

        // Crée le fichier sur le système de fichiers
        File imageFile = new File(filePath);
        imageFile.createNewFile();

        // Écris les données du fichier dans le fichier créé
        FileOutputStream fos = new FileOutputStream(imageFile);
        fos.write(file.getBytes());
        fos.close();

        return fileName;
    }

    // Autres méthodes à implémenter...

    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setQuantity(product.getQuantity());
        dto.setCreatedAt(product.getCreatedAt());
        dto.setImage(product.getImage());
        dto.setStockQuantity(product.getStockQuantity());
        return dto;
    }
}
