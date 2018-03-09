import scala.annotation.tailrec

object Solution {

    def fibonacci(x: Int):Int = {
      @tailrec
      def loop(acc: Int, a: Int = 0, b: Int = 1): Int = {
        if (acc == 1) {
          a
        } else {
          loop(acc - 1, b, a + b)
        }
      }

      return loop(x)
    }

    def main(args: Array[String]) {
      println(fibonacci(readInt()))
    }
}

