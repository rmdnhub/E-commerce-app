package com.tp3.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tp3.demo.entities.Product;


public interface ProductRepository  extends JpaRepository<Product, Long>{
	
	List<Product> findByPublication(boolean publication);
	List<Product> findByNomContaining(String nom);

}
