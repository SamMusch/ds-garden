---
title: Supervised
---
# Weekly

[Canvas Page](https://canvas.umn.edu/courses/139500) | [Reading List](https://canvas.umn.edu/courses/139500/pages/reading-list) | [Self Assess](https://canvas.umn.edu/courses/139500/pages/weekly-self-assessment-questions)



# ML Code

## Classification

[Curves (Matrix, Precision/Recall, ROC)](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics)

```python
# Knn
param_grid = dict(n_neighbors = list(range(1,31)), 
weights = ["uniform", "distance"])
knn = KNeighborsClassifier()

# Tree
param_grid = dict(criterion = ["gini", "entropy"], 
max_depth = range(2,10),
min_samples_leaf = range(2,8),
min_impurity_decrease = [0,1e-8,1e-7,1e-6,1e-5,1e-4])
grid_tree_clf = tree.DecisionTreeClassifier(random_state=45)

# Logistic
param_grid = dict(penalty = ['l1', 'l2'], 
C = range(1,10))

# SVM
c = 5# reduce if overfitting
degrees = 3
influence = 1 
poly_kernel_svm_clf = Pipeline([
 ("scaler", StandardScaler()),
 ("svm_clf", SVC(kernel="poly", degree=degrees, coef0=influence, C=c))
 ])
poly_kernel_svm_clf.fit(X, y)
```


```python
# In text

from sklearn.metrics import classification_report
from sklearn import metrics

target_names = ['malignant', 'benign']
y_true = y_test
y_pred = y_pred

print(target_names)
print("Accuracy: {0:.2%}".format(accuracy_score(y_true, y_pred)))
print("Precision: {0:.2%}".format(metrics.precision_score(y_true, y_pred)))
print("Recall: {0:.2%}".format(metrics.recall_score(y_true, y_pred)))
print("F1: {0:.2%}".format(metrics.f1_score(y_true, y_pred)))
print('-------------------------------------')
print(classification_report(y_true, y_pred))
```

```python
# Visually - https://i.imgur.com/PExd8UC.png

from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
print(classification_report(ytest, yfit, target_names=faces.target_names))

mat = confusion_matrix(ytest, yfit)
sns.heatmap(mat.T, square=True, annot=True, fmt='d', cbar=False,
xticklabels=faces.target_names,
yticklabels=faces.target_names)
plt.xlabel('true label')
plt.ylabel('predicted label');
```


