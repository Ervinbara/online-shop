package com.ervin.onlineshop.service;

import com.ervin.onlineshop.model.User;
import com.ervin.onlineshop.model.dto.UserDTO;
import com.ervin.onlineshop.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
// import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    // private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        //this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        //String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        //userDTO.setPassword(hashedPassword);
        User user = modelMapper.map(userDTO, User.class);
        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDTO) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isEmpty()) {
            return null; // Gérer le cas où l'utilisateur n'existe pas
        }

        User existingUser = optionalUser.get();

        // Mettre à jour les propriétés de l'utilisateur à partir du DTO
        existingUser.setName(userDTO.getName());
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setPassword(userDTO.getPassword());
        existingUser.setRole(userDTO.getRole());

        // Enregistrer l'utilisateur mis à jour dans la base de données
        User updatedUser = userRepository.save(existingUser);

        // Mapper et renvoyer l'utilisateur mis à jour en DTO
        return modelMapper.map(updatedUser, UserDTO.class);
    }


    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean authenticate(String email, String password) {
        // Récupération de l'utilisateur depuis la base de données par son email
        User user = userRepository.findByEmail(email);

        // Vérification si l'utilisateur existe et si le mot de passe est correct
        /**
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return true; // Le mot de passe est correct
        } else {
            return false; // Le mot de passe est incorrect ou l'utilisateur n'existe pas
        }
         **/
        return true;
    }

}
