package com.tp3.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long identifiant;
	private String nom;
	private String description;
	private Long  prix;
	private Boolean publication;
	/**
	 * 
	 */
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param identifiant
	 * @param nom
	 * @param description
	 * @param prix
	 * @param publication
	 */
	public Product( String nom, String description, Long prix, Boolean publication) {
		super();
		this.nom = nom;
		this.description = description;
		this.prix = prix;
		this.publication = publication;
	}
	public Long getIdentifiant() {
		return identifiant;
	}
	public void setIdentifiant(Long identifiant) {
		this.identifiant = identifiant;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getPrix() {
		return prix;
	}
	public void setPrix(Long prix) {
		this.prix = prix;
	}
	public Boolean getPublication() {
		return publication;
	}
	public void setPublication(Boolean publication) {
		this.publication = publication;
	}
	
	

}
