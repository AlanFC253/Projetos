/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Campeonato;


public class Queue implements TAD_Queue {
     private int total = 0; 
    private int head = -1; 
    private int tail = -1; 
    private Object memo[]; 
    private int MAX;
    
    public int getTail(){
        return tail;
    }
    
    public Queue() {
        MAX = 1000; //capacidade para 1000 objetos
        memo = new Object[MAX];
        total = 0;
        head = -1;
        tail = -1;
    }
    public Queue(int quantidadeMAX) {
        MAX = quantidadeMAX; 
        memo = new Object[MAX];
        total = 0;
        head = -1;
        tail = -1;
    }
    
    @Override
    public boolean isEmpty () {
        return(total==0);
    }

    @Override
   public boolean isFull () {
        return(total==MAX);
    }

    @Override
    public Object enqueue (Object x) {
        if( !isFull() && x!=null ) { // pré-condições
        if( ++tail >= MAX ) tail = 0; // avançamos a cauda (circular)
        if ( head == -1 ) head = tail; // só se a fila estava vazia
        memo[tail] = x;
        total++;
        return x;
        }
        else return null; //não podemos inserir se a fila está cheia ou x==null
    }

    @Override
    public Object dequeue () {
        if( !isEmpty() ) { //verificamos a pré-condição
        Object objeto = memo[head];
        if( ++head >= MAX) head = 0; //avançamos a cabeça (circular)
        total--;
        if( total == 0 ) { //se a fila ficou vazia
        head = -1;
        tail = -1;
        }
        return objeto; //retornamos o objeto que estava na cabeça
        }
        else return null; //não podemos retirar de uma fila vazia
    }

    @Override
    public Object peek () {
        if( !isEmpty() ) return ( memo[head] );
        else return null; //impossível retornar o objeto se a fila está vazia
    }
    
    @Override
    public String toString () {
        if( !isEmpty() ) {
        String saida = "";
        int pos = head; //variável auxiliar, para não alterar head
        for(int i=1; i<=total; i++) { // total é a qtde. de elementos
        saida += memo[pos].toString();
        if ( i != total ) saida += "\n"; //ou saida += "\n";
        pos++;
        if ( pos >= MAX ) pos = 0;
        }
        return ("Homens:\n"+saida);
        }
        else return ( "Sem homens cadastrados" ); // fila vazia
    }
    
}
