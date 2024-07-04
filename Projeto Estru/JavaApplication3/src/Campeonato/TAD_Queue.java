/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Campeonato;

/**
 *
 * @author Pichau
 */
public interface TAD_Queue {
    public boolean isEmpty(); 
    public boolean isFull(); 
    public Object enqueue(Object x);
    public Object dequeue();
    public Object peek();
    public String toString();
}
