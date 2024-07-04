/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Campeonato;

/**
 *
 * @author Pichau
 */
public class Atleta extends Pessoa {
    private String pais;
    private double altura;
    
    
    //Constructor
    public Atleta(String nome,char sexo,String pais, double altura) {
        setPais(pais);
        setAltura(altura);
        setSexo(sexo);
        setNome(nome);
    }
    
    
    //Methods

    @Override
    public String toString() {
        return "Nome: "+this.getNome()+"\nPais: "+this.getPais()+"\nSexo: "+this.getSexo()+"\nAltura: "+this.getAltura();
    }
    
    
    
    //Gettes e Settes
    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }
    
}
