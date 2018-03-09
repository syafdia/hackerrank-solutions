
object Solution {

  def main(args: Array[String]): Unit = {
    val sc = new java.util.Scanner (System.in);
    var n = sc.nextInt();
    var arr = new Array[Int](n);
    for(arr_i <- 0 to n-1) {
        arr(arr_i) = sc.nextInt();
    }

    val (a, b, c) = plusMinus(arr)

    println(a)
    println(b)
    println(c)
  }

  private def plusMinus(data: Array[Int]): (Double, Double, Double) = {
    val tot = data.length.toFloat
    val (a, b, c) = data.foldLeft((0, 0, 0)) { (acc, v) =>
      (
        acc._1 + (if (v > 0) 1 else 0),
        acc._2 + (if (v < 0) 1 else 0),
        acc._3 + (if (v == 0) 1 else 0))
    }

    (a / tot, b / tot, c / tot)
  }
}