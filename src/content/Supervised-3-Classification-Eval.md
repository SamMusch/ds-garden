
**2025-02-02**: DONE.

## Week 3: Class Eval

- [How to train a model](https://sebastianraschka.com/faq/docs/evaluate-a-model.html)
- [Classification eval for unbalanced data](https://classeval.wordpress.com/introduction/introduction-to-the-precision-recall-plot/)
- [Sci-kit plot](https://github.com/reiinakano/scikit-plot)


**Accuracy** can be misleading. 2 primary reasons:
1. **Imbalanced Class Distributions**: When one class dominates, accuracy may inflate how well the model performs.
2. **Ignoring Economic Costs/Benefits**: Different types of errors can have varying costs. It’s often more insightful to build a cost/benefit matrix and maximize profit, rather than maximizing accuracy.

Cost-Benefit Approach
1. Construct a “cost/benefit” matrix, detailing the financial impact of each type of prediction:
   - **TP** & **TN**: Represent revenue or benefits.
   - **FP** & **FN**: Represent costs or losses.
2. Multiply your confusion matrix by the cost/benefit matrix to calculate expected profit (or cost), and use this to guide decisions.

### Formulas (TP, FP, TN, FN)

```ad-sam

| **Metric**                            | **Formula**          |
| ------------------------------------- | -------------------- |
| **True Positive Rate (TPR) / Recall** | $\frac{TP}{TP + FN}$ |
| **False Positive Rate (FPR)**         | $\frac{FP}{FP + TN}$ |
| **Precision**                         | $\frac{TP}{TP + FP}$ |
| **Recall (Same as TPR)**              | $\frac{TP}{TP + FN}$ |

```


### Model Evaluation Techniques

[ChatGPT](https://chatgpt.com/share/435a9d82-0d85-4b76-bbec-5b73391dc0f6): Key "curves" and model evaluation techniques commonly used in classification:

`Scope`
- **Within**: These methods evaluate how well a single model is performing, often helping diagnose issues like overfitting, threshold tuning, and class imbalance.
- **Across**: These methods compare multiple models or evaluate the model’s added value over a random baseline.
- **Either**: Some techniques can be used **either within a model** (e.g., tuning a threshold) or **across models** (e.g., selecting the best-performing one).

```ad-sam

| `Scope` | **Evaluation Technique**                                | **What**                                                                                                              | **Why**                                                                                                                    | **Imbalanced Data Suitability**                                                                                       |                                                                                                     |
| ------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Within  | **Confusion Matrix**                                    | Shows the counts of (TP, TN, FP, FN)                                                                                  | From here, can derive performance metrics.                                                                                 | -                                                                                                                     | [Imgur](https://i.imgur.com/GqFRVwK.png)                                                            |
| Within  | **ROC Curve**<br> <br>Receiver Operating Characteristic | Plots TPR vs. FPR at different probability thresholds.                                                                | Offers insight into the trade-off between TP & FP.                                                                         | **Bad**. When negative class is large, the FPR remains deceptively low, which makes ROC curve look overly optimistic. | [Img1](https://i.imgur.com/MWVJ5bc.png), [Img2](https://i.imgur.com/icN6gnX.png)                    |
| Either  | **AUC**<br><br>Area Under the ROC Curve                 | A single-number summary (the area under the ROC curve).                                                               | $\text{AUC} = 1$ indicates a perfect model. <br><br>$\text{AUC} = 0.5$ indicates a model with no discriminative power.     | -                                                                                                                     | [Imgur](https://i.imgur.com/HLScrQ3.png)                                                            |
| Either  | **Precision-Recall Curve**                              | Plots precision vs. recall as the decision threshold varies.                                                          | Especially useful for imbalanced datasets, or when false positives and false negatives incur high costs.                   | **Good**. Focuses on the minority class, where precision and recall are most critical.                                | [Img](https://i.imgur.com/oD7MUiT.png)<br><br>[Best & Worst Cases](https://i.imgur.com/3ukkvJx.png) |
| Across  | **Lift Chart**                                          | Compares the model’s performance against a random baseline.                                                           | Shows how many more positives are identified by the model compared to random selection.                                    | **Good**. Especially relevant if you’re trying to identify a small minority class more effectively than chance.       | [Imgur](https://i.imgur.com/F6HmCkn.png)                                                            |
| Across  | **Gain Chart**                                          | Displays cumulative gain (the fraction of positives identified) as you move through the sorted predictions.           | Similar to Lift, it shows the improvement gained by the model over random selection.                                       | **Good**. Like the Lift chart, it highlights model performance on minority classes.                                   | [Imgur - Profit Curve](https://i.imgur.com/SD9BQdL.png)                                             |
| Across  | **Cumulative Response Curve**                           | Shows the proportion of positive instances captured as you move through the ranked predictions.                       | Commonly used in marketing and lead-generation applications to understand how quickly you capture most of the “yes” cases. | -                                                                                                                     | [Cumulative response curve](https://i.imgur.com/MJdeBr0.png)                                        |
| Within  | **Validation Curve**                                    | Plots the training and validation scores across different levels of model complexity (e.g., varying hyperparameters). | Helps diagnose overfitting or underfitting by showing whether the model performance is improving or plateauing.            | -                                                                                                                     | [Imgur](https://i.imgur.com/lnaPwKO.png)                                                            |

```


### Single-Value Measures

```ad-sam

| **Metric**                                 | **What**                                                                                                                                                                          | **Why**                                                                                                                               | **Imbalanced Data Suitability**                                                                              |                                          |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| **F-Measure (F1 Score)**                   | The harmonic mean of precision and recall: <br> $F1 = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$                                    | Combines precision and recall into a single metric, weighting them equally.                                                           | **Good**. Highlights performance on the minority class, where both precision and recall can be low.          | [Imgur](https://i.imgur.com/yV39H3u.png) |
| **Matthews Correlation Coefficient (MCC)** | A correlation coefficient between observed and predicted classifications: <br> $\text{MCC} = \frac{(TP \times TN) - (FP \times FN)}{\sqrt{(TP + FP)(TP + FN)(TN + FP)(TN + FN)}}$ | Accounts for all four quadrants (\(TP, TN, FP, FN\)) and provides a balanced measure even if the classes are of very different sizes. | **Good**. MCC is often more informative than accuracy and works well with imbalanced classes.                | [Imgur](https://i.imgur.com/ekP8auk.png) |
| **Cohen’s Kappa**                          | Measures agreement between the model’s predictions and the true labels, adjusted for chance agreement.                                                                            | In imbalanced scenarios, a model might appear good by randomly guessing the majority class. Kappa accounts for this chance agreement. | **Mostly good**. While it adjusts for chance, it can still be influenced by highly imbalanced distributions. | [Imgur](https://i.imgur.com/nKydIUS.png) |

```

[ChatGPT - Types of Means](https://chatgpt.com/share/679fa4e5-5a1c-8000-a4c1-0c6d86650e7e) - Arithmetic, harmonic, geometric





