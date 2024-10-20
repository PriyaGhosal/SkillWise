import tkinter as tk
from tkinter import messagebox
import random
import time

class TypingTest:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Typing Test")
        self.label = tk.Label(self.root, text="", wraplength=400)
        self.label.pack()
        self.entry = tk.Text(self.root, height=10, width=40)
        self.entry.pack()
        self.button = tk.Button(self.root, text="Start", command=self.start_test)
        self.button.pack()
        self.text_to_type = ""
        self.start_time = 0

    def start_test(self):
        self.text_to_type = self.generate_random_text()
        self.label.config(text=self.text_to_type)
        self.start_time = time.time()
        self.button.config(text="Submit", command=self.submit_test)

    def submit_test(self):
        user_text = self.entry.get("1.0", "end-1c")
        accuracy = self.calculate_accuracy(user_text, self.text_to_type)
        speed = self.calculate_speed(user_text, self.start_time)
        messagebox.showinfo("Results", f"Accuracy: {accuracy:.2f}%\nSpeed: {speed} wpm")

    def generate_random_text(self):
        # Generate a random text of 100 characters
        text = ""
        for _ in range(100):
            text += chr(random.randint(97, 122))  # Generate a random lowercase letter
        return text

    def calculate_accuracy(self, user_text, original_text):
        # Calculate the accuracy of the user's input
        correct_chars = sum(1 for i, j in zip(user_text, original_text) if i == j)
        return (correct_chars / len(original_text)) * 100

    def calculate_speed(self, user_text, start_time):
        # Calculate the speed of the user's input in words per minute
        elapsed_time = time.time() - start_time
        num_words = len(user_text.split())
        return (num_words / elapsed_time) * 60

    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    typing_test = TypingTest()
    typing_test.run()
