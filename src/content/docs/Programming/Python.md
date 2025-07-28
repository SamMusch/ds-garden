---
published: true
---

### Libraries

```python
import warnings
warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", category=DeprecationWarning)
pd.set_option('display.max_columns', 60) 
np.set_printoptions(precision=2)
import pandas as pd
import numpy as np
from pandas.plotting import scatter_matrix

import seaborn as sns
sns.set_theme(style="whitegrid")
%matplotlib inline
import matplotlib as mpl
import matplotlib.pyplot as plt
mpl.rc('axes', labelsize=14)
mpl.rc('xtick', labelsize=12)
mpl.rc('ytick', labelsize=12)


# Stats
from scipy import stats
import statsmodels.api as sm


# Data
import pandas_datareader
from pandas_datareader import data, wb
import quandl
import json
import requests
from bs4 import BeautifulSoup
import urllib


# Dates
from datetime import datetime, time, tzinfo, timedelta
import dateutil.parser as parser
from dateutil.parser import parse
from pandas.tseries.offsets import Day, MonthEnd


# Preprocess
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.pipeline import *
from sklearn.preprocessing import *
from sklearn import model_selection
from sklearn.model_selection import *
from sklearn.impute import SimpleImputer


# For classification
from matplotlib.colors import ListedColormap
from sklearn import neighbors, linear_model, LogisticRegression, tree
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix, precision_recall_curve, average_precision_score, roc_curve, auc,classification_report, accuracy_score, plot_precision_recall_curve

# svm
from sklearn import svm
from sklearn.svm import *

# Ensemble
from sklearn.ensemble import RandomForestClassifier,RandomForestRegressor,ExtraTreesClassifier,VotingClassifier,BaggingClassifier,AdaBoostClassifier,GradientBoostingRegressor

```

### Reading

```python
pd.read_csv(
  'usstates.csv', 
  header=3, 
  delimiter=' ',
  index_col = 'column we want', 
  usecols = ['winner', 'total'],
  names = ['winner_new', 'total_new'], 
  na_values = {'Names': ['Delaware'], 'States': ['PA']},    
  
  # Date Columns
  parse_dates={'Combo': ['Date', 'Time']}, 
  parse_dates = True, 
  infer_datetime_format = True)
```

### Initial Clean

```python
df.replace(',', '', regex = True, inplace = True)

cols = ['', '']
for col in cols:
  df[col] = df[col].astype(str) # float, int64
  # pd.to_datetime(df[col]).dt.date
```

```python
# Replace
df.replace([-1,-2], 0)             # Replace -1 and -2 with 0
df.rename(columns = {'old': 'new'})
```

```python
b.columns.name = 'numbers'    # meta columns
b.index.name = 'letters'      # meta rows
b.columns = ['a', 'b', 'c']   # each column
b.index = [0, 1, 2]           # each row
```

```python
df['column']['row']      # Column first
df.loc['row', 'column']  # Row first

# Indexing
data[exc:inc]
data[row][col]
```

```python
# Quick eval
np.ndim  # num rows
np.shape # row x column
np.unique()
```

```python
df.dtypes.value_counts()

df.select_dtypes(include = ['object', 'int64']).head()
```

#### Class

```python
def cleaning(df):
    df = df.dropna(how = 'all')           # Rows
    df = df.dropna(axis = 1, how = 'all') # Cols
    df = df.apply(pd.to_numeric, errors='ignore') # Float if possible
```

```python
class Cleaning:
    def __init__(self, df, num_cols, str_cols, date_cols):
        self.df = df
        self.num_cols = num_cols
        self.str_cols = str_cols
        self.date_cols = date_cols
```

#### Missing

```python
# Checking
df.isnull().sum()
df.duplicated()
np.nan
```

```python
# Filling
df.fillna(method = 'ffill')
df.fillna(data.mean())
```

### Summary

```python
# Continuous variables
sns.pairplot(df)


# Gives a 2x4 matrix
data2 = [[1, 2, 3, 4], 
         [5, 6, 7, 8]]
arr2 = np.array(data2)
```

#### Regression

```python
# Regression
X = data'house-size-(sq.ft.)',-'number-of-rooms','year-of-construction'.md
X1 = sm.add_constant(X)
Y = data['House Price']

reg = sm.OLS(Y,X1).fit()
reg.summary()
```

#### Stats

```python
# Basics
np.mean(axis = 0) # down the column
np.cumsum()
np.cumprod()
np.std()
np.var()
np.min(), np.max()

# Number generation
np.random.randn(rows,cols)

np.average(ratings[neighborhood == 'LittleItaly'])
df2.isin(['W']).sum()
```

#### Distributions

```python
x = np.arange(1,11)
y1 = np.arange(10,101, 10)
y2 = np.arange(50,4,-5)
data = np.column_stack((y1, y2)) # just concatenating 2 column arrays


fig, (ax1, ax2) = plt.subplots(nrows=1, ncols=2, figsize = (12,4)) # 1st width, 2nd height

ax1.plot(x, y1, color='lightblue', linewidth=3) # make line-plot on axis 1
ax1.scatter([2,4,6,5], [5,15,25, 65],           # add scatter plot in axis 1
           color='red',
           marker='^', 
            edgecolor = 'b')
ax1.set_xlim(1, 8)          # set limit of x axis
ax1.set_title('First plot') # set title
ax1.set_xlabel('X label1')
ax1.set_ylabel('Y label1')



ax2.bar(x, y1, color='lightgreen', linewidth=1, edgecolor = 'blue' ) # make bar-plot on axis 2
ax2.set_title('Second plot')
ax2.set_xlabel('$X label2$')
ax2.set_ylabel('$Y label2$')
ax2.yaxis.tick_right()

fig.tight_layout()
```

```python
sns.lineplot(data=trades, x = trades.index, y = "price", hue='above_95')

# Movement by size
sns.relplot(
    data=trades,
    x="time", 
    y="lag",
    hue="above_95", 
    #size="choice", 
    col="above_95",
    kind="line", 
    height=5, 
    aspect=.75, 
    facet_kws=dict(sharey=True),
)


# Scatter: size vs lag
f, ax = plt.subplots(figsize=(6.5, 6.5))
sns.despine(f, left=True, bottom=True)
clarity_ranking = ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF"]
sns.scatterplot(x="size", 
                y="lag",
                hue="bins", 
                size="size",
                palette="ch:r=-.2,d=.3_r",
                sizes=(1, 8), 
                linewidth=0,
                data=trades, 
                ax=ax,
               label=None).get_legend().remove()



sns.kdeplot(
    data=trades, x="size",
    cumulative=True, common_norm=False, common_grid=True)

```

### Filtering

```python
years[years.isin(justices['appointed']) == False]
np.where(flights['Flight Status'] != 'ontime', 1, 0)
```

```python
# Both ends are exclusive
letters = ['a', 'b', 'c', 'd', 'e']

letters[1:3]   # 'b', 'c'
letters[::-1]  # reverses the order
```

```python
states['a'] = (states['name'].str.contains('a', False))
```

### Mutating

```python
f = lambda x: x ** 2
data['pop'].apply(f)
```

```python
# Map --> new column
convert_dict = {
    val1: new_val1,
    val2: new_val2}
df['new'] = df.map()
```

```python
# Map --> combine
mapping = {}
for key, value in zip(key_list, value_list):
    mapping[key] = value
```

```python
# Map --> combine from a dict
galleries = {}
for name, code in filename.items():
    galleries[name] = code
```

```python
# Map --> combine from a list
def get_grade_points(grade_list):
    gp_dict = {'A': 4.0, 'A-': 3.67, 'B+': 3.33}
    gp_list = list()
    for g in grade_list:
        gp_list.append(gp_dict[g])
    return gp_list
```

### Arrange

```python
lakes[np.argsort(lake_areas)] [::-1]

np.arange(new_data)
```

### Modifying

#### Reshaping

```python
# Converting columns into rows
col_names = list(pop.columns.values)

delete_these = ["STNAME", "CTYNAME", "COUNTY"]
for _ in delete_these:
    col_names.remove(_)
    
pop_melt = pd.melt(pop, id_vars=['STNAME', 'CTYNAME', 'COUNTY'], value_vars=col_names)
```

```python
np.reshape(rows, cols)
```

```python
# Pivot wide & replace with underscores
df = data.pivot(index="report_month", columns="item", values="value")
df.columns = list(map(lambda x: x.replace(' ', '_'), df.columns))
df = df.reset_index()
```

#### Strings

```python
strip() # remove leading & trailing whitespace (`l` for lead, `r` for trail)
startswith(substring) # returns true if the string starts with substring

find(substring) # returns the lowest index in the string. If substring is not found, the method returns −1.
replace(old, new)

"Sam\'s shack"
```

#### Splitting

```python
# Splitting a string
my_string = 'One two three four'
word_list = my_string.split(' ') # we can split however we want

# Print the list of words.
print(word_list)
# ['One', 'two', 'three', 'four']
```

```python
.append()     # add element
.extend()     # add multiple values

.insert(3, 'add as 4th value')
.remove()     # remove by value

bisect.insort(df, value)  # insert and keep sorted 


list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
list1 += list2
```

### Grouping

```python
df.groupby(['CARRIER', 'FL_NUM']).\
    agg({'delayed': ['mean', 'size'],
         'DAY_WEEK': 'nunique'})
```

### Dates

```python
from datetime import datetime, time, tzinfo, timedelta
end = datetime.today().strftime('%Y-%m-%d')
start = (datetime.now() - timedelta(400)).strftime('%Y-%m-%d')
```

```python
def seperate_date(data):
    data['dow'] = data['visit_date'].dt.dayofweek
    data['year'] = data['visit_date'].dt.year
    data['month'] = data['visit_date'].dt.month
    data['day'] = data['visit_date'].dt.day
    return data
air_visit = seperate_date(air_visit)
```

```python
if month < 1 or month > 12:
    print('Invalid month.')
elif month in [1, 3, 5, 7, 8, 10, 12] and (day < 1 or day > 31) or \
     month in [4, 6, 9, 11] and (day < 1 or day > 30) or \
     month == 2 and (day < 1 or day > 28):
    print('Invalid day.')
elif year < 0 or year > 99:
    print('Invalid year.')
```

```python
# Function to correct monthly to daily to get rid of 30 vs 31, weekdays vs weekends
```

#### Initial

```python
# Abbrev aliases: https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases
# Timezones: https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#time-zone-handling
```

```python
# 1. Timestamp: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.to_datetime.html
pd.to_datetime(dates + [None])

# 2. Fixed period: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.date_range.html
pd.date_range(start=None, end=None, periods=None, freq=None)

# 3. Interval: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Period.html
pd.Period(data, freq = '')
```

```python
dt.strftime('%m/%d/%Y %H:%M')   # '10/29/2011 20:30'
dt.strptime('20091031', '%Y%m%d')


```

#### Actions

```python
df/df.shift(1)          # Simple
np.log(df/df.shift(1))  # Log

# Downsample (aggregate)
data.resample('Min').sum()
d.resample('4H').mean()

# Upsample 
data.resample('S').asfreq().interpolate() # linear
data.interpolate('S').ffill()             # fill down


# Summary by time period
df.groupby(df.index.year).std()  # .mean()
```

### Functions

```python
def main():
    texas()
    california()

def texas():
    birds = 5000
    print('texas has', birds, 'birds.')
    
def california():
    birds = 8000
    print('california has', birds, 'birds.')
    
main()
```

```python
def main():
    value = 5
    show_double(value)

def show_double(number): # parameter is number
    result = number * 2  # able to receive the parameter because it was included above
    print(result) 
    
main()
```

## Reilly Examples

### Weighted average

```python
# Weighted average
returns = 250 * (mydata/mydata.shift(1))-1   # annual returns for each
weights = np.array([.25,.25,.25,.25])        # weight for each of the 4 cols
np.dot(returns, weights)
```

### Ifelse, for

```python
desc = input('Please enter a description of the item: ')
cost = float(input('Please enter the cost of the item: '))
life = int(input('Please enter the estimated life of the item in whole years: '))
method = int(input('Please enter depreciation method (1 = straight line, 2 = double declining balance): '))

beg_value = cost
dep = 0

for year in range(0, life+1):
    end_value = beg_value - dep
    print('{}   {:7.2f} {:7.2f} {:7.2f}'.format(year, beg_value, dep, end_value))
    if year == life - 1:
        dep = end_value
    elif method == 1:
        dep = 1.0 / life * cost
    elif method == 2:
        dep = 2.0 / life * end_value
    beg_value = end_value
```

### Join strings

```python
n = ["Michael", "Lieberman"]
def join_strings(words):
    result = ""
    for w in range(len(words)):
        result += words[w]
    return result
print join_strings(n)
```

### List comprehension

```python
# 3) List of numbers divisible by 3
by_3 = [i for i in range(1, 20) if i % 3 == 0]  
# what i want   
# for where i want it
# if something holds


# 6) Zip 
start_w = [146, 166, 157, 159, 153]
end_w = [142, 166, 159, 155, 145]
gain_loss = []
for i in range(len(start_w)):
    gain_loss.append(start_w[i] - end_w[i])    
gain_loss = [start - end for start, end in zip(start_w, end_w)]


# 7. Given lists of first and last names, make a list of full names
first = ['Wibowo', 'Kristijan', 'Kalyani']
last = ['Boothman', 'Koenig', 'Kriz']
full = []
for i in range(len(first)):
    full.append(first[i] + ' ' + last[i])
```

### Zip

```python
# Pairs up lists
seq1 = ['foo', 'bar', 'baz']
seq2 = ['one', 'two', 'three']
zipped = zip(seq1, seq2)


# Unzip pairs
pitchers = [('Nolan', 'Ryan'), 
            ('Roger', 'Clemens'),
            ('Curt', 'Schilling')]
first_names, last_names = zip(*pitchers)
first_names
last_names
```

### Recursion

```python
import os
import tarfile

def recursive_files(dir_name='.', ignore=None):
    for dir_name,subdirs,files in os.walk(dir_name):
        if ignore and os.path.basename(dir_name) in ignore: 
            continue

        for file_name in files:
            if ignore and file_name in ignore:
                continue

            yield os.path.join(dir_name, file_name)

def make_tar_file(dir_name='.', tar_file_name='tarfile.tar', ignore=None):
    tar = tarfile.open(tar_file_name, 'w', dereference=True)

    for file_name in recursive_files(dir_name, ignore):
        tar.add(file_name)

    tar.close()


dir_name = '.'
tar_file_name = 'archive.tar'
ignore = {'.ipynb_checkpoints', '__pycache__', tar_file_name}
make_tar_file(dir_name, tar_file_name, ignore)
```

### Classes

```python
class Player:
    def __init__(self, name, team, ab, hits):
        self.name = name
        self.team = team
        self.at_bats = ab
        self.hits = hits

    def batting_avg(self):
        # By tradition, baseball batting averages are rounded to 3 digits
        return round(self.hits / self.at_bats, 3)

    def __str__(self):
        return self.name


def load_players(filename):
    players = []
    with open(filename, 'r') as f:
        for p in csv.reader(f):
            a_player = Player(p[0], p[1], int(p[2]), int(p[3]))
            players.append(a_player)
    return players
```

```python
class Employees:
    
    # Class variable that will be the same for each instance
    raise_amt = 1.04
    
    # Counting total number of instances
    num_emps = 0
    
    # Attributes
    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.email = last + '.' + first + '@gmail.com'
        self.pay = pay
        Employees.num_emps += 1
    
    # Method
    def fullname(self):
        return '{} {}'.format(self.first, self.last)
    
    # Method applying the class variable
    def app_raise(self):
        self.pay = int(self.pay * Employees.raise_amt)
        
    # Class methods -- gives us the power to set a new 'amount' for the raise_amt
    @classmethod
    def set_new_raise_amount(cls, amount):
        cls.raise_amt = amount # note that raise.amt came from up top

emp1 = Employees('sam', 'musch', 50000)

# Appling methods
print(emp1.pay)  # Before the raise
emp1.app_raise() # Call the raise
print(emp1.pay)  # After the raise
print(Employees.num_emps)

# Applying class methods
# This overwrites the 'raise_amt' from the top
Employees.set_new_raise_amount(1.05) # 1.05 is the argument passed to the 'amount' from the classmethod
print(emp1.pay) 
```

```python
class CashRegister:
    def __init__(self, initial_balance = 0.0):      # Python will pass itself as the first object
        self.balance = initial_balance  # Initialize the balance to 0
        
    def __str__(self):
        return 'Your balance is ${0:.2f}'.format(self.balance) # going to need to run the new_cash = CashRegister() again
        
    def add(self, amt):
        new_balance = self.balance + amt
        self.balance = new_balance    # make sure you qualify your variables with "self"
        
    def subtract(self, amt):
        self.subtract -= amt
```

```python
class WageCalculator:
    def cal_gross_pay(self):
        return float(self.hours * self.wage)
        
a_calculator = WageCalculator()
a_calculator.hours = 35
a_calculator.wage = 12.50
a_calculator.cal_gross_pay()
```

```python
class Fraction:

    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator
        
    def gcd(a, b):
        if b == 0:
            return a
        else:
            return Fraction.gcd(b, a % b)    
    
    def reduce(self):
        self.gcd = Fraction.gcd(self.numerator, self.denominator)
        self.numerator = int(self.numerator / self.gcd)
        self.denominator = int(self.denominator / self.gcd)
        
    def __str__(self):
        return str(self.numerator) + '/' + str(self.denominator)


#a_fraction = Fraction(4,6)
#a_fraction.reduce()
#a_fraction.numerator
#a_fraction.denominator
#print(a_fraction)
```

### Images and Links

```python
Insert web image jupyter
<img src=https://i.imgur.com/NktUrwM.png width="400" height="340" align="left">


Linking in jupyter
<a href="#Overview">Overview of Linux and Virtual Machine</a>  
<a href="#Navigating">Navigating with Linux</a>  
<a href="#Pipes-and-Working-With-Files">Pipes and Working With Files</a>  
```

## Plotting Adv

### Libraries

```python
import matplotlib.pyplot as plt
from matplotlib import rcParams
%matplotlib notebook
import seaborn as sns

from pylab import rcParams
rcParams['figure.figsize'] = 5,7
```

```python
sns.set_theme(context='paper', 
                  style='white',      # darkgrid, whitegrid, dark, white, ticks
                  palette='PuOr_r',   # pastel Blues RdPu
                  #font='sans-serif', 
                  font_scale=1, 
                  rc=None)

plt.rcParams["font.family"] = "Times New Roman"
plt.rcParams['figure.figsize']=(10,5)
```

```python
# Background
sns.set_style() # 'white', 'dark', 'whitegrid', 'darkgrid', 'ticks'

# Colors
sns.palplot(sns.color_palette("coolwarm", 10))        # ordinal
sns.palplot(sns.color_palette("Blues", 10))       # interval
sns.palplot(sns.color_palette("colorblind", 10))  # categorical
```

### Multiple Plots

```python
wide = 7; tall = 7
fig = plt.figure(figsize = [wide, tall])
fig.suptitle("Wine Type - Quality", fontsize=14)


ax1 = fig.add_subplot(2,2,1)
ax1.hist(np.random.randn(100), bins = 20, color = 'k', alpha = .3)
ax1.set_title("Red Wine")
ax1.set_xlabel("Quality")
ax1.set_xticks(range(-4,5,2)) 
ax1.set_xticklabels(range(-4,5,2), fontsize=12)
ax1.set_ylabel("Frequency")
#ax1.annotate("something",xy=(2006,fy[2006]))


ax2 = fig.add_subplot(2,2,2)
ax2.scatter(np.arange(30), np.arange(30) + 3 * np.random.randn(30))
ax2.set_title("Red Wine")
ax2.set_xlabel("Quality")
ax2.set_ylabel("Frequency")


ax3 = fig.add_subplot(2,2,3)
ax3.plot(np.random.randn(50).cumsum(), 'k--')
ax3.set_title("Red Wine")
ax3.set_xlabel("Quality")
ax3.set_ylabel("Frequency")


fig.subplots_adjust(hspace=0.5, wspace=0.3)
```

### 3D

```python
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure(figsize=(8,6))
ax = fig.add_subplot(111, projection='3d')
ax.scatter(pca_3d[:,0], 
           pca_3d[:,1], 
           pca_3d[:,2],
           c=kmeans.labels_,
           edgecolors='b')

ax.set_xlabel('X - What they bet')
ax.set_ylabel('Y - What they earn')
ax.set_zlabel('Z - Frequency of visits')
ax.set_xticks([])
ax.set_yticks([])
ax.set_zticks([])
plt.show()
```

### Dash

```python
import dash
import dash_table
import plotly.graph_objects as go
import pandas as pd
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
```

```python
df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv')
# add an id column and set it as the index
# in this case the unique ID is just the country name, so we could have just
# renamed 'country' to 'id' (but given it the display name 'country'), but
# here it's duplicated just to show the more general pattern.
df['id'] = df['country']
df.set_index('id', inplace=True, drop=False)

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_table.DataTable(
        id='datatable-row-ids',
        columns=[
            {'name': i, 'id': i, 'deletable': True} for i in df.columns
            # omit the id column
            if i != 'id'
        ],
        data=df.to_dict('records'),
        editable=True,
        filter_action="native",
        sort_action="native",
        sort_mode='multi',
        row_selectable='multi',
        row_deletable=True,
        selected_rows=[],
        page_action='native',
        page_current= 0,
        page_size= 10,
    ),
    html.Div(id='datatable-row-ids-container')
])

```

```python
@app.callback(
    Output('datatable-row-ids-container', 'children'),
    Input('datatable-row-ids', 'derived_virtual_row_ids'),
    Input('datatable-row-ids', 'selected_row_ids'),
    Input('datatable-row-ids', 'active_cell'))
def update_graphs(row_ids, selected_row_ids, active_cell):
    # When the table is first rendered, `derived_virtual_data` and
    # `derived_virtual_selected_rows` will be `None`. This is due to an
    # idiosyncrasy in Dash (unsupplied properties are always None and Dash
    # calls the dependent callbacks when the component is first rendered).
    # So, if `rows` is `None`, then the component was just rendered
    # and its value will be the same as the component's dataframe.
    # Instead of setting `None` in here, you could also set
    # `derived_virtual_data=df.to_rows('dict')` when you initialize
    # the component.
    selected_id_set = set(selected_row_ids or [])

    if row_ids is None:
        dff = df
        # pandas Series works enough like a list for this to be OK
        row_ids = df['id']
    else:
        dff = df.loc[row_ids]

    active_row_id = active_cell['row_id'] if active_cell else None

    colors = ['#FF69B4' if id == active_row_id
              else '#7FDBFF' if id in selected_id_set
              else '#0074D9'
              for id in row_ids]

    return [
        dcc.Graph(
            id=column + '--row-ids',
            figure={
                'data': [
                    {
                        'x': dff['country'],
                        'y': dff[column],
                        'type': 'bar',
                        'marker': {'color': colors},
                    }
                ],
                'layout': {
                    'xaxis': {'automargin': True},
                    'yaxis': {
                        'automargin': True,
                        'title': {'text': column}
                    },
                    'height': 250,
                    'margin': {'t': 10, 'l': 10, 'r': 10},
                },
            },
        )
        # check if column exists - user may have deleted it
        # If `column.deletable=False`, then you don't
        # need to do this check.
        for column in ['pop', 'lifeExp', 'gdpPercap'] if column in dff
    ]
```

```python
if __name__ == '__main__':
    app.run_server(debug=True, use_reloader=False)
```

# API

## Code

```python
url = 'https://api.github.com/repos/pandas-dev/pandas/issues'
resp = requests.get(url)
data = resp.json()          # Returns a DICTIONARY
data[0].keys()              # Available keys
df = pd.DataFrame(data, columns = ['number', 'title', 'labels', 'state'])
```

## Overview

[Paper](https://www.immagic.com/eLibrary/ARCHIVES/GENERAL/WIKIPEDI/W120623A.pdf)

Application programming interface = API

[Link]([https://www.basicknowledge101.com/pdf/km/Application%20programming%20interface.pdf](https://www.basicknowledge101.com/pdf/km/Application programming interface.pdf)): API = set of routines, protocols, tools for building software apps

## Intro - Brian Cookey

### 1. Intro

Person   -   server (API)   -   computer

Resources = the "nouns" of APIs

Client / Server

- Server - nothing more than a powerful computer. Waits for our request and then performs
  - Provides the API

- Client - talks to the server, gets the data we need
- API - the tool that makes the website's data digestible for a computer
  - Just a set of rules that both sides agree to

---

### 2. Protocols

Protocol - the "etiquette" that the 2 sides use when communicating

HTTP - main web protocol. To make a valid request, client needs to include:

- URL
- Method
  - GET (retrieve)
  - POST (create new)
  - PUT (edit)
  - DELETE
- List of headers
  - Provides meta info. (What time, size of body, etc)
- Body
  - Contains the data that we want

When the server responds, it sends a 3-digit number instead of the URL / Method. This would be something like 404 (not found), 200 (success). The "list of headers" and the "body" remain the same.

*Begin able to use an API relies on understanding how to make correct HTTP requests to the server.*

---

### 3. Data Formats

JSON

- Keys - represent an *attribute* of an object. Also have a corresponding value.
- Associated Array - nested object, lets you use an object as the value for some key

XML - Exstensible markup language

- First part of the block is called a *root node*
- Inside we have *parent* and *child* nodes

How data formats are used in HTTP

- Headers
  - *Content-type* is where we specify data format
  - *Accept* is how the client asks the server what formats it can read

---

### 4 - 5. Authentication

How does the server know that the client is who it says it is?

- Authentification

Authentification schemes

- Basic - requires username and password
  - Part of the *Header* that is passed
- API Key Auth - requires API to be accessed with a *unique key*
  - Sometimes this key is used instead of the *username & password*
  - Sometimes you add it to the *url*
  - Sometimes its somewhere in the *body*
- Open Authorization (OAuth)
  - Automates the key exchange to make things easier for us
  - Requires user to give *username & password*, does the API key stuff behind the scenes
    - OAuth 1 - (pg 42)
    - OAuth 2 - Tries to make it easy for companies to adapt the auth process to their needs. Might be slight differences. Gives us the ability to set an expire time on the *access token*
      - Step 1 - User tells client to connect to server
      - Step 2 - Client sends the user to the server
      - Step 3 - User signs in to server, grants the client access
      - Step 4 - Clients sends us back to the client along with the unique *auth code*
      - Step 5 - Client sends this *auth code* back to the client. Once the server sees this, it sends the client an *access token*
      - Step 6 - The client can get data from the server

---

### 6. API Design

SOAP - XML based, standardized structure for request & response

#### REST

Representational State Transfer

Lots of conventions but lots of flexibility for designers

---

### 7. Real Time Communication

Client Driven - Need the server to update

Server Driven - Need to client to update

- **Polling** - ask the server for updates
- **Long** **polling** - same, but the server doesn't respond until something changes
- **Webhooks** - client makes requests & listens for requests. This makes the client a server as well.
  - Client has to provide *callback url*
  - Server has to have a place for someone enter the *callback url*
  - When something changes on server, server sends **request** to the client to let it know
- **Subscription webhooks** - makes it so that a person doesn't have to enter the *callback url*, just happens automatically
  - Example: REST Hooks
  - Client: "Let me know if anything changes"
  - Server: "Okay"

---

## CS50

[Main Lecture](https://www.youtube.com/watch?v=24Kf3v7kZyE), [Beyond](youtube.com/watch?v=hrWlXsx48Ss&list=LLiv6JOoOHlxzSCYoarMOUzA&index=2&t=8s)

# Webscrape

```python
from bs4 import BeautifulSoup
import urllib

def total_consumer_credit():
    r = urllib.request.urlopen(
      'https://www.federalreserve.gov/releases/g19/current/default.htm')
    soup = BeautifulSoup(r)

    t = soup.find('table', title='Consumer Credit Outstanding')
    headers = t.thead.find_all('tr')
    labels = []

    for l in headers[1].find_all('th'):
        labels.append(l.get_text())

    rows = t.tbody.find_all('tr')

    index = []
    data = []

    for r in rows[7:9]:
        index.append(r.th.get_text().strip())
        td = r.find_all('td')
        row_list = []
        for i in range(len(labels)):
            v = td[i].get_text().strip().replace(',', '')
            row_list.append(float(v))
        data.append(row_list)

    # Create the DataFrame
    return pd.DataFrame(data, index=index, columns=labels)
```

# Hackerrank

[Tutorial](https://www.hackerrank.com/contests/python-tutorial/challenges)

[Python Qs](https://www.hackerrank.com/domains/python)

```

```