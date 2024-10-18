from flask import Flask, render_template, request, redirect, url_for
import random
import time

app = Flask(__name__)

# Predefined list of typing prompts
prompts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends."
]

@app.route('/')
def index():
    # Randomly select a prompt
    prompt = random.choice(prompts)
    return render_template('index.html', prompt=prompt)

@app.route('/result', methods=['POST'])
def result():
    start_time = float(request.form['start_time'])
    end_time = float(request.form['end_time'])
    user_input = request.form['user_input']
    original_text = request.form['original_text']

    time_taken = end_time - start_time
    accuracy = calculate_accuracy(original_text, user_input)
    wpm = calculate_wpm(user_input, time_taken)

    return render_template('result.html', wpm=wpm, accuracy=accuracy)

def calculate_accuracy(original, user):
    # Calculate the accuracy percentage
    correct_chars = sum(1 for o, u in zip(original, user) if o == u)
    return (correct_chars / len(original)) * 100

def calculate_wpm(user_input, time_taken):
    # Calculate words per minute
    words = len(user_input.split())
    minutes = time_taken / 60
    return words / minutes if minutes > 0 else 0

if __name__ == '__main__':
    app.run(debug=True)
