package com.ervin.onlineshop.controller;

import com.ervin.onlineshop.model.User;
import com.ervin.onlineshop.model.dto.UserDTO;
import com.ervin.onlineshop.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping(path = "/api")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    // Fonction liée à l'auth
    // Endpoint pour l'enregistrement d'un nouvel utilisateur
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        UserDTO registeredUser = userService.createUser(userDTO);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    // Endpoint pour la connexion d'un utilisateur
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody UserDTO userDTO, HttpServletRequest request) {
        // Récupérer l'utilisateur depuis la base de données en fonction de son email
        User user = userService.findByEmail(userDTO.getEmail());

        // Vérifier si l'utilisateur existe et si le mot de passe correspond
        if (user != null && user.getPassword().equals(userDTO.getPassword())) {
            // Si les informations d'identification sont correctes, initier une session
            HttpSession session = request.getSession(true);
            // Stocker les détails de l'utilisateur dans la session
            session.setAttribute("user", user);
            // Retourner les détails de l'utilisateur
            ModelMapper modelMapper = new ModelMapper();
            String message = "Connexion réussie";
            return new ResponseEntity<>(modelMapper.map(user, UserDTO.class), HttpStatus.OK);
        } else {
            // Si les informations d'identification sont incorrectes, retourner une réponse d'erreur
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }




    // Endpoint pour la déconnexion d'un utilisateur
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate(); // Supprime la session actuelle de l'utilisateur
            return new ResponseEntity<>("Logged out successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No active session found", HttpStatus.BAD_REQUEST);
        }
    }
}
