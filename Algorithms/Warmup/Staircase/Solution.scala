object Solution {

  def main(args: Array[String]): Unit = {
    val sc = new java.util.Scanner (System.in)
    val n = sc.nextInt()
    staircase(n)
  }

  def staircase(n: Int): Unit = {
    for (i <- 1 to n) {
      for (j <- n to 1 by -1 ) {
        val char = if (j > i) " " else "#"
        print(char)
      }
      println("")
    }
  }
  
}