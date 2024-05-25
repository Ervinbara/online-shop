-- Script entité products --
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ALTER TABLE products ADD COLUMN image VARCHAR(255) NULL;
);

-- Script entité user --
CREATE TABLE user (
     id BIGINT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     role VARCHAR(20) NOT NULL
);

-- Script entité orders --
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Script entité order_item --
CREATE TABLE order_item (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
    -- FOREIGN KEY (order_id) REFERENCES orders(id),--
);

-- Script entité cart_item --
CREATE TABLE cart_item (
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   product_id BIGINT NOT NULL,
   quantity INT NOT NULL,
   CONSTRAINT fk_cart_item_product FOREIGN KEY (product_id) REFERENCES products (id)
);
