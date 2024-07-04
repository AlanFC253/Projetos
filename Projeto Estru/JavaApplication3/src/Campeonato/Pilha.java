/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Campeonato;

/**
 *
 * @author Pichau
 */
public class Pilha implements TAD_Pilha {
    
    private int topo;
    private int MAX;
    private Object memo[];


    
    public Pilha (int qtde) {
    topo = -1;
    MAX = qtde;
    memo = new Object[MAX];
    }

    @Override
    public boolean isEmpty(){
    return(topo==-1);
    }

    @Override
    public boolean isFull(){
    return(topo==MAX-1);
    }


    @Override
    public Object push(Object x){
        if(!isFull() && x !=null){
            memo[++topo]=x;
            return x;
        }else{
            return null;
        }
    }

    @Override
    public Object pop() {
        if(!isEmpty()) return memo[topo--];
        else return null;
    }

    @Override
    public Object top() {
        if(!isEmpty()) return memo[topo];
        else return null;
    }

    @Override
    public String toString() {
        if(!isEmpty()){
            String msg="";
            for(int i=0;i<=topo;i++){
                msg+="\n" +memo[i].toString();
                if(i!=topo)msg+="\n";
            }
            return ("Mulheres:\n"+msg);
        }
        else return "Sem mulheres cadastradas";
    }

    

}
