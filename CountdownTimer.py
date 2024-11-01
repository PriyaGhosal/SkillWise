import time

def countdown_timer(seconds):
    while seconds > 0:
        mins, secs = divmod(seconds, 60)
        time_format = f"{mins:02d}:{secs:02d}"
        print(f"⏳ Time Remaining: {time_format}", end='\r')
        time.sleep(1)
        seconds -= 1
    print("\n⏰ Time's up!")

if __name__ == "__main__":
    try:
        seconds = int(input("Enter time in seconds for the countdown: "))
        countdown_timer(seconds)
    except ValueError:
        print("Please enter a valid number.")
