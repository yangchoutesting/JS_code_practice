from random import randint
from player import Player

class Game:
    def __init__(self):
        self.player_1 = Player()
        self.player_2 = Player()

    def game_loop(self):
        while True:
            self.random = self.choose_randInt()
            self.player_1.read_input()
            self.player_2.read_input()

            print(f"Number is {self.random}")
            print(self.get_result())

            play_again = input("Play again? (y/n): ")
            if play_again == "n":
                break

        print("Thanks for playing.")

    def get_result(self):
        diff1 = abs(self.player_1.guess - self.random)
        diff2 = abs(self.player_2.guess - self.random)

        if diff1 < diff2:
            return f"{self.player_1.name} wins!"
        if diff1 > diff2:
            return f"{self.player_2.name} wins"
        return "Its a tie!"

    def choose_randInt(self):
        return randint(1, 101)
