
## Math formula

[Book, page 7](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA11&hl=en) |  [ChatGPT](https://chatgpt.com/share/b16e4fc1-7cd7-494e-8d39-111bb12165ef)

**Formula (canonical form):**

$Maximize \:\: z=c^Tx$
$\small\text{where..}$
$\small\text{c = coefs of decision variables (vector)}$
$\small\text{x = decisions variables (vector)}$
$c^Tx \small\text{ = dot product}$


$s.t. \:\: Ax \leq b$
$\small\text{where..}$
$\small\text{A = matrix of coefficients for the constraints}$
$\small\text{x = vector of decision variables}$
$\small\text{b = vector representing the RHS of the constraints}$

---

**Example:**

$\text{Maximize} \:\: z= 3x_1 + 5x_2$

$\text{Subject to:}$
$2x_1 + 3x_2 \leq 12$
$x_1 + 2x_2 \leq 8$
$x_1 \leq 4$

$\text{Non-negativity:}$
$x_1 \geq 0$
$x_2 \geq 0$

Here:
$$C^T = [3 \:\: 5]$$
$$
x = \begin{bmatrix}
    x_{1} \\
    x_{2} \\
\end{bmatrix} 
\\
$$
$$A = \begin{bmatrix}
    2       & 3 \\
    1       & 2 \\
    1       & 0
\end{bmatrix}$$
$$b = \begin{bmatrix}
    12        \\
    8        \\
    4      
\end{bmatrix}$$

---
