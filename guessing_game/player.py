class Player:
    def __init__(self):
        self.set_name()

    def read_input(self):
        message = f"{self.name} please enter a number between 1 and 100: "
        number = int(input(message))
        if number > 100 or number < 1:
            raise ValueError("Invalid input between 1 and 100")

        self.guess = number

    def set_name(self):
        self.name = input("Please enter your name: ")
