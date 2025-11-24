# Fake News Classification using NLP

## Overview
A complete NLP pipeline that classifies news articles as real or fake using TF IDF features and machine learning models. The project focuses on detecting misinformation with high accuracy.

## Features
- Preprocessing of text data  
- TF IDF vectorization  
- Models used Logistic Regression and SVM  
- Evaluation with accuracy, precision, recall and confusion matrix  
- Easy to train and test with the provided notebook  
- Clean and reproducible code  

## Tech Stack
- Python  
- Pandas  
- Scikit-learn  
- NumPy  
- Matplotlib / Seaborn  
- Jupyter Notebook  

## Project Structure
- `data` folder contains the dataset  
- Main notebook shows the end to end workflow  
- Models trained using TF IDF vectors  

## How it Works
1. Load and clean dataset  
2. Remove noise like stopwords and punctuation  
3. Convert text into vectors using TF IDF  
4. Train Logistic Regression and SVM models  
5. Evaluate and compare metrics  
6. Predict labels for new articles  

## Results
- High accuracy on test data  
- SVM performed best in most cases  
- Good generalization on unseen text  

