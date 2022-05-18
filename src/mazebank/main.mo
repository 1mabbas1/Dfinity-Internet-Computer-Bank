import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"
actor mazebank {
   stable var currentVal: Float = 1000;
  
   stable var startTime = Time.now();

  Debug.print(debug_show(startTime));

  public func topUp(amount: Float) {
    currentVal += amount;
     Debug.print(debug_show(currentVal)); 
  };

  public func withdrawal(amount: Float){
    let tempValue: Float = currentVal - amount;

    if ( tempValue >= 0){
    currentVal -= amount;
    Debug.print(debug_show(currentVal));
    } else {
      Debug.print("Not enough balance");
    }
  }; 

  public query func checkBalance(): async Float {
    return currentVal;
  };

  public func compoundInterest() {
    let currentTime = Time.now();
    let timeElaspsed = (currentTime - startTime)/1000000000;

    currentVal := currentVal*1.01 ** Float.fromInt(timeElaspsed);
    startTime := currentTime;
  }
}

