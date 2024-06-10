import csv
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# URL of the Amazon page to scrape
url = "https://www.amazon.com/s?k=laptop"

# Set up Chrome options to run headlessly
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# Initialize a WebDriver (make sure you have the appropriate driver installed)
driver = webdriver.Chrome(options=chrome_options)

# Load the webpage
driver.get(url)

# Wait until the element with id "search" is present
wait = WebDriverWait(driver, 50)
root_element = wait.until(EC.presence_of_element_located((By.ID, "search")))

# Once the element is present, get the page source
page_content = driver.page_source

# Close the WebDriver
driver.quit()

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(page_content, 'html.parser')

# Find and print the product details
products = soup.select('.s-main-slot .s-result-item')  # Adjust the selector to target product elements

# Create and open a CSV file for writing
with open('amazon_products.csv', 'w', newline='', encoding='utf-8') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(['Title', 'Price', 'Rating'])  # Write header row
    
    for product in products:
        title = product.find('span', class_='a-size-medium a-color-base a-text-normal')
        price_whole = product.find('span', class_='a-price-whole')
        price_fraction = product.find('span', class_='a-price-fraction')
        rating_span = product.find('span', class_='a-icon-alt')

        title_text = title.text.strip() if title else 'N/A'
        price_text = f"{price_whole.text.strip()}.{price_fraction.text.strip()}" if price_whole and price_fraction else 'N/A'
        rating_text = rating_span.text.strip() if rating_span else 'N/A'

        # Write the data to CSV
        csvwriter.writerow([title_text, price_text, rating_text])

# Print a confirmation message after writing to the file
print("Products data has been written to amazon_products.csv")
