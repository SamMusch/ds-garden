---
published: true
---

```r
data <- data %>%
  replace_na(list(Item = 'Unspecified')) %>%
  mutate_if(is.numeric, funs(replace_na(., 0))) %>%   # Replace na with 0
  mutate_if(is.numeric, funs(round(., 0))) %>%        # Rounding
  mutate(goal = .03,
         hours = `Visit Duration (In Minutes)` / 60)

save(data, file = "/Users/Sam/Desktop/Case/data.RData")

library(DataExplorer) # For initial EDA
```

# New

### Select, filter, transmutate

```r
## Select
flights %>% select(year:month, day, starts_with("abc"))
ends_with("xyz")
contains("ijk")
last_col()


## Filter
flights %>% filter(word %in% c('ebay','apple'))


## Arrange
flights %>% arrange(desc(dep_delay))


# Mutate
# https://dplyr.tidyverse.org/reference/mutate.html
subset %>% 
  mutate (gain = dep_delay - arr_delay,      ## determing if flight was longer than expected
          speed = distance / air_time * 60,  ## determining speed
          ratio = fraction / lag(fraction))  ## percent change (ratio)


# Transmutate
counties %>%
  transmute(state, county, population, density = population / land_area) %>%
  filter(population > 1000000) %>%
  arrange(density)


# Normalizing with grouped mutates
babynames %>%
  group_by(name) %>%
  mutate(name_total = sum(number),   # Total number of babies named x
         name_max = max(number)) %>% # Total number of babies named x in baby's max year
  ungroup() %>%                      # Pulled out of the grouping, left the new cols though
  mutate(fraction_max = number / name_max)
```

### Intro

```r
class(flights)
# int = integer
# dbl = real numbers
# chr = strings
# dttm = date + time
# lgl = true or false
# fctr = factors
# date = dates
```

```R
library(tidyverse)
glimpse(flights)
summary(flights)
describe(flights)
```

```R
# Convert columns to numeric
mutate_at(weather5, vars(CloudCover:WindDirDegrees), funs(as.numeric))
```

### Gather, spread

```r
library(tidyr)
# Gather - when 1 variable is currently split into multiple columns
# https://tidyr.tidyverse.org/reference/spread.html
gather(wide, new_col_name, new_val_name, -cols_to_ignore) # na.rm = TRUE
spread(tall, old_col_name, old_val_name)


# Separate - splitting apart into 2 columns
# https://tidyr.tidyverse.org/reference/separate.html
separate(df, col = ___, into = c("___", "___"), sep = "___")
unite(df, yr_month, yr, month) # sep = '-'
```

### Factors, strings, dates

```r
# Factors
library(forcats)
data %>% fct_reorder() # reorder categorical
```

```r
# Converting strings to date
library(lubridate)
mdy('07/30/96')
ymd('2015 August 25')
a2$dob <- ymd(a$dob)
```

```r
# Working with strings
library(stringr)
str_trim('    abc    ') #removes begin and end whitespace
str_pad('233', width = 5, side = 'left', pad = '0') # pad until 5 digits
str_detect(df, 'what we look for')
str_replace(df, 'old', 'new')
tolower('LOWER')

as.logical(str_detect(students3$dob, '1997')) # Born in 1997?
```

### Summarize

```r
flights %>% count(month, sort = T)

# Mean of one column
flights %>% summarise(delay = mean(dep_delay, na.rm = TRUE))

# Group by and then mean

# Average delay by year - returns one row
flights %>% 
  group_by(year) %>%  # These are the columns 
  summarise(delay = mean(dep_delay, na.rm = TRUE)) # remove rows with missing values

# Average delay by month - returns 31 rows
flights %>% 
  group_by(year, day) %>%  # These are the columns 
  summarise(delay = mean(dep_delay, na.rm = TRUE))

# Average delay by day - returns 365 rows
flights %>%
  group_by(year, month, day) %>%  # These are the columns 
  summarise(delay = mean(dep_delay, na.rm = TRUE))

# Count the states with more people in Metro or Nonmetro areas
counties_selected %>%
  group_by(state, metro) %>%
  summarize(total_pop = sum(population)) %>%
  top_n(1, total_pop) %>%
  ungroup() %>%
  count(metro) %>%
  rename(counting = n)
```

```r

# Can we see a summary of delays by each individual city?

# Summary figures by a variable of interest
delays <- flights %>% 
  group_by(dest) %>%                        ## establishes dest as the variable we are aggregating
  summarise(
    count = n(),                            ## counts how many times each city was the dest
    dist = mean(distance, na.rm = TRUE),    ## finds the average number of miles traveled to get there
    delay = mean(arr_delay, na.rm = TRUE)   ## finds the average delay in arrival time to the city
  ) %>% 
  filter(count > 20, dest != "HNL")         ## only counting cities that were visited more than 20 times and not Honolulu


ggplot(data = delays,                             ## data is the code above
       mapping = aes(x = dist, y = delay)) +           ## x and y axis are the summaries from above
  geom_point(aes(size = count), alpha = 1/3) +    ## dot plot and size signals frequency, alpha makes them more transparent
  geom_smooth(se = TRUE)                          ## se = FALSE means no band around the line


```

````r
# How often are flights delayed? Are they usually delayed by quite a bit?

# 1st lets look at only flights that havent been cancelled
not_cancelled <- flights %>%                         ## using flights as data again
  filter(!is.na(dep_delay), !is.na(arr_delay)) %>%   ## removing rows where there is no data in these 2 columns
  group_by(year, month, day) %>%            ## grouping by our 3 date columns
  summarise(
    mean = mean(dep_delay),                          ## finding the average departure delay
    delay = mean(arr_delay, na.rm = TRUE),           ## average arrival delay
    n = n()
  )


## establishing n as the count of all
ggplot(data = not_cancelled, mapping = aes(x = n, y = delay)) + geom_point(alpha = 1/10)
````

### Math

[Book](https://r4ds.had.co.nz/transform.html#mutate-funs)

```r


# Integer division
5 %/% 1

# Remainder division
5 %% 1

# Logs
log(3)
log2(3)
log10(3)

# Leading and lag (time series)
x <- 1:10
lag(x)
lead(x)

# Cumulative aggregates - rolling measures
cumsum(x)
cumprod(x) 
cummin(x) 
cummax(x)
cummean(x)

```

### Rmarkdown

[Bookdown](https://bookdown.org/mike/data_analysis/)

```r
include = FALSE prevents code and results from appearing in the finished file. R Markdown still runs the code in the chunk, and the results can be used by other chunks.

echo = FALSE prevents code, but not the results from appearing in the finished file. This is a useful way to embed figures.

message = FALSE prevents messages that are generated by code from appearing in the finished file.

warning = FALSE prevents warnings that are generated by code from appearing in the finished.
```

```r

```

```r
options(warn=-1)
options(repr.matrix.max.cols = 50,
       repr.matrix.max.rows = 50)

suppressWarnings(suppressMessages(library(tidyverse)))
```

```r
title:
subtitle:
author:
date: "`r format(Sys.time(), '%b %d %Y')`"
urlcolor: "blue"
output:
	html_document:
		css:
		toc: true
		toc_depth: 6
		toc_float: true
		code_folding: 'hide'
params:
	pwd:
		label: 'Enter the Password'
		value: ''
		input: password
	keys: !r c('A1', 'A2', 'B1', 'B2', 
             'U1', 'U2', 'S1', 'S2') #, 'UNK')
	qs_lim: 15
	st_d: '2021-05-05'
	end_d: !r lubridate::today()
	base_dir: '/Users/path/repo'
editor_options:
	chunk_output_type: inline
```

```r
---
title: "A/B Testing"
subtitle: ''
author: "Sam Musch - musch.sam@gmail.com"
date: "`r format(Sys.time(), '%b %d %Y')`"
urlcolor: blue
output:
  html_document:
    toc: true
    toc_float: true
    code_folding: show
    number_sections: true
    toc_depth: '4'
    df_print: paged
    css: '/Users/Sam/Library/Application Support/abnerworks.Typora/themes/newsprint.css'
---
```

````r
```{r global_options, include=FALSE}
knitr::opts_chunk$set(fig.width=5, fig.height=3, fig.align='left', warning=F, message=F)
kable_func <- function(data) {
  knitr::kable(data, booktabs=T, digits=2) %>%
    kable_styling(latex_options = c('striped', 'scale_down'))
}
theme_ilo <- function() {
  theme_minimal() +
    theme(
      text = element_text(family = "Bookman", color = "gray25"),
      plot.subtitle = element_text(size = 10),
      plot.caption = element_text(color = "gray30"),
      plot.background = element_rect(fill = "gray95"),
      plot.margin = unit(c(5, 10, 5, 10), units = "mm")
    )
}
mode <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}
```
````

````r
# File structure

# _knit_in_background.R
# docs
# markdown
# sql_and_scripts


fld <- 'my/path/folder'

my_render <- function(fn, pr, wd = 'my/path/folder') {
  sewd(wd)
	rmarkdown::render(
  	input = paste0('my/path/folder/markdown/', fn, '.Rmd'),
  	output_format = 'html_document',
  	output_dir = 'my/path/folder/docs/',
  	knit_root_dir = wd,
  	params = pr
  )
}

my_render('File_Name_Only', 
          pr = list(base_dir = fld), 
          wd = fld)


---

```{sql, eval=FALSE, 
    code = readLines(paste0(params$base_dir,
                           'sql_and_scripts/___.sql'))}

```
````

### Missing

```r
replace_with_na(replace = list(rate=c("", "NEW", "-"))) 
```

```r
gg_miss_var(riskfactors)
miss_var_summary()

miss <- which(is.na(df$col)) # helps locate

# How many of these in each column?
miss_scan_count(data = pacman, search = list("N/A", "missing","na", " "))

#Convert them to na (specific cols)
replace_with_na(pacman, 
                replace = list(
                  col1 = c("N/A", "na", "missing"), 
                  col2 = c("N/A", "na", "missing")))


# Convert to na (all cols)
replace_with_na_all(
  pacman, 
  ~.x %in% c("N/A", "missing", "na", " ")
)



# Missing values
sum(is.na(df)) # count of all na
na.omit(df) # removes rows with an NA
complete.cases() # rows with no NA
prop_miss()


#detecting missing values
library(mice)
md.pattern(mobile_apps)


#visually detecting missing values
library(VIM)
aggr(mobile_apps, prop=FALSE, numbers=TRUE)
matrixplot(mobile_apps)


# Finding implicit missing
library(tidyr)
frogger %>% 
  fill(name) %>%
  complete(name, time)


# How do groups change when another col is na?
oceanbuoys %>%
  bind_shadow() %>%
  group_by(humidity_NA) %>%
  summarise(wind_ns_mean = mean(wind_ns),
            wind_ns_sd = sd(wind_ns),
            n_obs = n())


# Replacing na with linear model
ocean_imp_lm_wind <- oceanbuoys %>% 
  bind_shadow() %>%
  impute_lm(air_temp_c ~ wind_ew + wind_ns) %>% 
  impute_lm(humidity ~ wind_ew + wind_ns) %>%
  add_label_shadow()


# Replace with 0
with_zero <- data %>% 
  fill(precinct, description) %>%
  complete(precinct, description, reportedDate)

with_zero  <- with_zero %>% mutate(count_of_crimes = ifelse(is.na(x), 0, x)
                                   write.csv(with_zero, 'new_data.csv')
```

### Datatable

~~~r
library(plotly)
rstudio.github.io/DT/
scales
DT
gganimate
dygraphs


```{r table, echo = FALSE, fig.fullwidth = TRUE,
    fig.width = 10, fig.height = 6}

data %>% 
	datatable(extensions = 'Buttons',
           options = list(
           dom = 'Blfrtip',
           bottons = c('copy', 'csv', 'excel', 'pdf'),
           lengthMenu = list(
           c(10, 25, 50, -1),
           c(10, 25, 50, 'All'))))
```
~~~

```r

```

## Time Series

[Tsibble](tsibble.tidyverts.org)

[Tidyverts Book](https://tidyverts.github.io/tidy-forecasting-principles/)

[Time Series Book](https://otexts.com/fpp3/hts.html)

```
year = lubridate::ymd(year, truncated = 2L)
```

### Create date

```r
library(xts)
as.xts(data, order.by = data$date)
```

### Tsibble

```r
library(tidyverse)
library(tsibble)

# [Key variables:](https://otexts.com/fpp3/tsibbles.html)
# - Index: Date period
# - Key: Descriptive variables
# - Values: Whatever is left over

prison <- readr::read_csv("https://OTexts.com/fpp3/extrafiles/prison_population.csv")
prison <- prison %>%
  mutate(Quarter = yearquarter(Date)) %>%
  select(-Date) %>%
  as_tsibble(key = c(State, Gender, Legal, Indigenous),
             index = Quarter)
```

### Filter

```r
filter_all(all_vars(!is.infinite))

factor(data$col, 
       order = TRUE,
      levels = c('', ''))
```

### Plots

```r
# Distributions behind each other (ridge)
https://www.r-graph-gallery.com/294-basic-ridgeline-plot.html

# Big resource
https://socviz.co/refineplots.html
https://brshallo.github.io/r4ds_solutions/
data-to-viz.com/graph/density.html
bookdown.org/yihui/rmarkdown/blogdown-directory.html
```

### Pct change

```r
data %>%
group_by(group) %>%
mutate(pct_change = Profit / lead(Profit) - 1)
```

# Stats

```R
library("margins")
probit <- glm(formula = attrition.fac ~ .,
              data=a2,
              family=binomial(link="probit"))
summary(probit)

###### MODEL SIGNIFICANCE
null.vs.probit <- probit$null.deviance - probit$deviance 
null.vs.probit
pvalue.probit <- pchisq(null.vs.probit,df=15,lower.tail=FALSE)
pvalue.probit


##### PROP CORRECTLY PREDICTED
fitted.probit <- fitted(probit,type="response")
max(fitted.probit)
min(fitted.probit)
sum(ifelse(probit$fitted.values<.5,0,1) == attrition.fac) / length(attrition.fac)
```

```r
# Relationship between 2 interval
cor.test(v1, v2, data=data, use="complete.obs")
```

```R
# Pairwise correlation
cor(pairwise, use="complete.obs")
```

Model

```r
model2 <- lm(log(v1) ~ log(v2) + v3, 
             data = housedata)

coef <- coef(model2)
res <- residuals(model2)
fitted <- fitted(model2)
```

Comparing models

```r
anova(model3ftest, model2ftest)
```

Residuals

```r
dev.new(width=8, height=4)
par(mfrow=c(1,3))
plot(multimodel,which=1, main="Linear model: Residuals vs Fitted Values") 
plot(multimodel,which=2, main="Linear model: Q‐Q Plot") # residual Q‐Q plot 
plot(multimodel,which=4, main="Linear model: Cook's Distance") # Cook's distance


# Normality test -- assumption is normal
shapiro.test(fit$residuals)
```

### Experiment

```r
# Let's create a "population" of 100000 data points
set.seed(202020)
N = 100000
X1 = rnorm(n = N, mean = 1, sd = 2) # random distribution
X2 = runif(n = N, min = 0, max = 5) # uniform distribution
eps = rnorm(N)

# Create dataframe
Y = 1 + 2 * X1 + .5 * X2 + eps
population = data.frame(X1, X2, Y)

# take a sample of 500 data points
n = 500
sample_idx = sample(1:N, n)
sample_ = population[sample_idx, ]
model = lm(Y ~ X
```

```r
# repeat sampling and estimating for multiple (100, 1000, 2000) times
nrep = 100
results = data.frame(b0 = rep(NA, nrep), b1 = rep(NA, nrep), b2 = rep(NA, nrep))
for (i in 1:nrep){
n = 500
sample_idx = sample(1:N, n)
sample_ = population[sample_idx, ]
model = lm(Y ~ X1 + X2, data = sample_)
results[i, ] = coef(model)
}
colMeans(results)
```

### TS - Hierarchy

```r
library(tsibble)
library(tidyverse)
library(fable)

tourism <- tsibble::tourism %>%
  mutate(State = recode(State,
                        `New South Wales` = "NSW",
                        `Northern Territory` = "NT",
                        `Queensland` = "QLD",
                        `South Australia` = "SA",
                        `Tasmania` = "TAS",
                        `Victoria` = "VIC",
                        `Western Australia` = "WA"))


ggplot(tourism, aes(x = Quarter, y = Trips)) +
  geom_col() + 
  scale_y_continuous(labels = scales::comma)

tourism_hts <- tourism %>%
  aggregate_key(State / Region, Trips = sum(Trips))

tourism_hts %>%
  filter(is_aggregated(Region)) %>%
  autoplot(Trips) +
  labs(y = "Trips ('000)",
       title = "Australian tourism: national and states") +
  facet_wrap(vars(State), scales = "free_y", ncol = 3) +
  theme(legend.position = "none")
```

# style.css

```css
p.caption {
  color: #777;
  margin-top: 10px;
}
p code {
  white-space: inherit;
}
pre {
  word-break: normal;
  word-wrap: normal;
}
pre code {
  white-space: inherit;
}

```

# Markdown

```
remotes::install_github("juba/rmdformats")
robobook theme (Global-Notebook)
```

```R
bookdown
smltar.com
bookdown.org/jarneric/spring_school
```

### Colors

medialab.github.io/iwanthue/

```
Blue: 6597CA
Red: FF6961
Green: B7D7BD
Purple: C4BEDF
Orange: E3C0B1
Gold: D2CCAF
```

rag(51,51,51) on google

### Images

```
<div class = 'images' id = 'alt-logo'>
	<a href = https://thesite.com>
	<img src = "https://thesite.com/image.png"
</div>
```

### CSS

```r
body {
  font-family: TimesNewRoman, "Times New Roman", 
    Times, Baskerville, Georgia, serif;
}

.tocify-item.list-group-item {
  color:#340034;
}

.tocify-item.list-group-item.active {
  color:#340034;
  background: #ddd3ee;
}

#TOC left {
  top: 10px;
  left: 0;
}

h1, .h1 {
  margin-top: 90px;
}


h2, .h2, h3, .h3, h4, .h4, h5, .h5 {
  margin-top: 60px;
}


body {
  font-family: "Open Sans", "Clear Sans", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  color: rbg(51, 51, 51);
  line-height: 1.0;
  font-size: 1.75em;
}


.nav>li>a {
  color: #340034;
}


.nav-pills>li.active>a, 
.nav-pills>li.active>a:hover,
.nav-pills>li.active>a:focus {
  background-color: #340034;
}
```