window.logout = () => { window.location.href = "/login.html"; };
window.openHelp = () => { window.location.href = "/help.html"; };
window.openAchievements = () => {
  const tab = document.getElementById("achievementsTab");
  tab.classList.toggle("active");
};

// ================= FEATURES DATA =================
const FEATURES = {
  html: [
    { title: "HTML Boilerplate", desc: "Basic HTML page structure." },
    { title: "Form Generator", desc: "Login / signup form HTML." },
    { title: "Navbar Builder", desc: "Responsive navigation bar." },
    { title: "Landing Page", desc: "Hero section with CTA." },
    { title: "Footer Generator", desc: "Website footer layout." }
  ],
  python: [
    { title: "CSV Reader", desc: "Read CSV using Pandas." },
    { title: "Data Plot", desc: "Plot graph using Matplotlib." },
    { title: "Flask App", desc: "Minimal Flask backend." },
    { title: "Automation Script", desc: "File automation script." },
    { title: "ML Starter", desc: "Basic ML model template." }
  ],
  javascript: [
    { title: "DOM Manipulation", desc: "Show/hide elements." },
    { title: "Fetch API", desc: "API request example." },
    { title: "Form Validation", desc: "Validate inputs." },
    { title: "Local Storage", desc: "Save data locally." },
    { title: "Slider Component", desc: "JS slider/carousel." }
  ],
  java: [
    { title: "Hello World", desc: "Basic Java program." },
    { title: "File Reader", desc: "Read files in Java." },
    { title: "JDBC Connect", desc: "Database connection." },
    { title: "Spring API", desc: "REST API skeleton." },
    { title: "Exception Handling", desc: "Try-catch template." }
  ],
  cpp: [
    { title: "Game Loop", desc: "Basic game loop." },
    { title: "STL Vector", desc: "Vector usage." },
    { title: "File IO", desc: "Read/write files." },
    { title: "Pointers", desc: "Pointer example." },
    { title: "Multithreading", desc: "Thread usage." }
  ],
  csharp: [
    { title: "Unity Script", desc: "MonoBehaviour script." },
    { title: "LINQ Query", desc: "LINQ usage." },
    { title: "Windows Form", desc: "Desktop UI starter." },
    { title: "Timer", desc: "Scheduled tasks." },
    { title: "API Call", desc: "HTTP request example." }
  ],
  rust: [
    { title: "Ownership Demo", desc: "Ownership & borrowing." },
    { title: "Struct Impl", desc: "Struct with methods." },
    { title: "File Handling", desc: "Safe file IO." },
    { title: "CLI App", desc: "Command-line tool." },
    { title: "Concurrency", desc: "Thread-safe concurrency." }
  ],
  swift: [
    { title: "UIViewController", desc: "iOS screen starter." },
    { title: "TableView", desc: "List UI." },
    { title: "Networking", desc: "API request." },
    { title: "Animations", desc: "Basic animations." },
    { title: "UserDefaults", desc: "Save settings." }
  ],
  sql: [
    { title: "SELECT Query", desc: "Basic SELECT." },
    { title: "JOIN Tables", desc: "JOIN example." },
    { title: "CREATE TABLE", desc: "Create table." },
    { title: "Indexes", desc: "Optimize queries." },
    { title: "Transactions", desc: "ACID example." }
  ],
  go: [
    { title: "HTTP Server", desc: "REST API server." },
    { title: "Goroutines", desc: "Concurrency example." },           
    { title: "JSON Handling", desc: "Encode/decode JSON." },
    { title: "CLI Flags", desc: "Command-line flags." },
    { title: "Unit Test", desc: "Testing skeleton." }
  ],
  kotlin: [
    { title: "Activity Starter", desc: "Android activity." },
    { title: "RecyclerView", desc: "Efficient lists." },
    { title: "Coroutines", desc: "Async tasks." },
    { title: "Retrofit", desc: "API calls." },
    { title: "Data Class", desc: "Model class." }
  ]
};

// ================= FEATURES DATA =================

const answers = {
  html: [
    { title: "HTML Boilerplate", desc: "Basic HTML page structure.", qna: [
        { question: "Write a basic HTML5 boilerplate.", answer: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Title</title>\n</head>\n<body>\n</body>\n</html>" },
        { question: "What is the purpose of <!DOCTYPE html>?", answer: "It tells the browser to render the page in HTML5 mode." },
        { question: "How to add a favicon to HTML page?", answer: '<link rel="icon" href="favicon.ico" type="image/x-icon">' }
      ]
    },
    { title: "Form Generator", desc: "Login / signup form HTML.", qna: [
        { question: "Create a simple login form.", answer: '<form><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button>Login</button></form>' },
        { question: "Add an email input field.", answer: '<input type="email" placeholder="Email">' },
        { question: "How to create a submit button?", answer: '<button type="submit">Submit</button>' }
      ]
    },
    { title: "Navbar Builder", desc: "Responsive navigation bar.", qna: [
        { question: "Create a basic navbar with 3 links.", answer: '<nav><a href="#">Home</a><a href="#">About</a><a href="#">Contact</a></nav>' },
        { question: "How to make navbar horizontal?", answer: 'Use CSS: nav a { display: inline-block; margin-right: 10px; }' },
        { question: "Add a logo to the navbar.", answer: '<nav><img src="logo.png" alt="Logo"><a href="#">Home</a></nav>' }
      ]
    },
    { title: "Landing Page", desc: "Hero section with CTA.", qna: [
        { question: "Create a hero section with title.", answer: '<section><h1>Welcome</h1><p>Intro text</p><button>Get Started</button></section>' },
        { question: "Add a background image to hero section.", answer: 'Use CSS: section { background-image: url("bg.jpg"); }' },
        { question: "Center content in hero section.", answer: 'Use CSS: section { text-align: center; }' }
      ]
    },
    { title: "Footer Generator", desc: "Website footer layout.", qna: [
        { question: "Create a simple footer.", answer: '<footer><p>© 2026 Code Forge</p></footer>' },
        { question: "Add social media links to footer.", answer: '<footer><a href="#">FB</a> <a href="#">Twitter</a></footer>' },
        { question: "Style footer with background color.", answer: 'Use CSS: footer { background-color: #333; color: #fff; }' }
      ]
    }
  ],

  python: [
    { title: "CSV Reader", desc: "Read CSV using Pandas.", qna: [
        { question: "Read a CSV file in Python.", answer: 'import pandas as pd\ndf = pd.read_csv("file.csv")\nprint(df.head())' },
        { question: "Select a column from DataFrame.", answer: 'df["column_name"]' },
        { question: "Filter rows where column > 10.", answer: 'df[df["column_name"] > 10]' }
      ]
    },
    { title: "Data Plot", desc: "Plot graph using Matplotlib.", qna: [
        { question: "Plot a line graph.", answer: 'import matplotlib.pyplot as plt\nplt.plot([1,2,3],[4,5,6])\nplt.show()' },
        { question: "Add title and labels to plot.", answer: 'plt.title("My Graph")\nplt.xlabel("X")\nplt.ylabel("Y")' },
        { question: "Plot a bar chart.", answer: 'plt.bar(["A","B"],[10,20])\nplt.show()' }
      ]
    },
    { title: "Flask App", desc: "Minimal Flask backend.", qna: [
        { question: "Create a basic Flask app.", answer: 'from flask import Flask\napp = Flask(__name__)\n@app.route("/")\ndef home():\n    return "Hello"\napp.run()' },
        { question: "Return JSON from Flask route.", answer: 'from flask import jsonify\n@app.route("/data")\ndef data():\n    return jsonify({"name":"CodeForge"})' },
        { question: "Explain app.run()", answer: "It starts the Flask server." }
      ]
    },
    { title: "Automation Script", desc: "File automation script.", qna: [
        { question: "Rename multiple files in folder.", answer: 'import os\nfor f in os.listdir():\n    os.rename(f, f.upper())' },
        { question: "Delete a file in Python.", answer: 'import os\nos.remove("file.txt")' },
        { question: "Copy files from one folder to another.", answer: 'import shutil\nshutil.copy("a.txt","b.txt")' }
      ]
    },
    { title: "ML Starter", desc: "Basic ML model template.", qna: [
        { question: "Create a linear regression model.", answer: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()' },
        { question: "Fit model with X and y.", answer: 'model.fit(X, y)' },
        { question: "Make predictions with model.", answer: 'preds = model.predict(X_test)' }
      ]
    }
  ],

  javascript: [
    { title: "DOM Manipulation", desc: "Show/hide elements.", qna: [
        { question: "Hide an element with id='box'.", answer: 'document.getElementById("box").style.display = "none";' },
        { question: "Show the element again.", answer: 'document.getElementById("box").style.display = "block";' },
        { question: "Toggle element visibility.", answer: 'const el = document.getElementById("box"); el.style.display = (el.style.display==="none")?"block":"none";' }
      ]
    },
    { title: "Fetch API", desc: "API request example.", qna: [
        { question: "Fetch data from API.", answer: 'fetch("https://api.example.com").then(res=>res.json()).then(data=>console.log(data));' },
        { question: "POST data to API.", answer: 'fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({x:1})})' },
        { question: "Handle fetch error.", answer: 'fetch("/api").catch(err=>console.error(err));' }
      ]
    },
    { title: "Form Validation", desc: "Validate inputs.", qna: [
        { question: "Check if input is empty.", answer: 'if(input.value===""){alert("Empty!")}' },
        { question: "Validate email format.", answer: 'const re=/^\\S+@\\S+\\.\\S+$/; if(!re.test(email.value)) alert("Invalid")' },
        { question: "Limit input length.", answer: 'if(input.value.length>10) alert("Too long")' }
      ]
    },
    { title: "Local Storage", desc: "Save data locally.", qna: [
        { question: "Save data to localStorage.", answer: 'localStorage.setItem("key","value");' },
        { question: "Retrieve data from localStorage.", answer: 'const val = localStorage.getItem("key");' },
        { question: "Remove item from localStorage.", answer: 'localStorage.removeItem("key");' }
      ]
    },
    { title: "Slider Component", desc: "JS slider/carousel.", qna: [
        { question: "Create a simple slider index=0.", answer: 'let i=0; const slides=document.querySelectorAll(".slide"); function show(){slides.forEach(s=>s.style.display="none"); slides[i].style.display="block";}' },
        { question: "Next slide function.", answer: 'function next(){i=(i+1)%slides.length; show();}' },
        { question: "Previous slide function.", answer: 'function prev(){i=(i-1+slides.length)%slides.length; show();}' }
      ]
    }
  ],

  java: [
  { title: "Hello World", desc: "Basic Java program.", qna: [
      { question: "Write a simple Hello World program.", answer: 'public class Main { public static void main(String[] args) { System.out.println("Hello World"); } }' },
      { question: "Explain main method in Java.", answer: "It is the entry point of a Java application." },
      { question: "Print multiple lines in Java.", answer: 'System.out.println("Line1"); System.out.println("Line2");' }
    ]
  },
  { title: "File Reader", desc: "Read files in Java.", qna: [
      { question: "Read a text file in Java.", answer: 'BufferedReader br = new BufferedReader(new FileReader("file.txt")); String line; while((line=br.readLine())!=null){System.out.println(line);} br.close();' },
      { question: "Use try-with-resources.", answer: 'try(BufferedReader br = new BufferedReader(new FileReader("file.txt"))){...}' },
      { question: "Explain FileReader vs BufferedReader.", answer: 'FileReader reads raw characters, BufferedReader adds buffering for efficiency.' }
    ]
  },
  { title: "JDBC Connect", desc: "Database connection.", qna: [
      { question: "Connect to MySQL database.", answer: 'Connection conn = DriverManager.getConnection(url,user,pass);' },
      { question: "Execute a SELECT query.", answer: 'Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery("SELECT * FROM table");' },
      { question: "Close JDBC connection.", answer: 'rs.close(); stmt.close(); conn.close();' }
    ]
  },
  { title: "Spring API", desc: "REST API skeleton.", qna: [
      { question: "Create a basic Spring Boot REST controller.", answer: '@RestController\npublic class MyController {\n  @GetMapping("/")\n  public String home(){ return "Hi"; }\n}' },
      { question: "Explain @RestController.", answer: "It combines @Controller and @ResponseBody to return JSON/text." },
      { question: "Create GET and POST endpoints.", answer: '@GetMapping("/get") ... @PostMapping("/post") ...' }
    ]
  },
  { title: "Exception Handling", desc: "Try-catch template.", qna: [
      { question: "Handle exception in Java.", answer: 'try { int a = 5/0; } catch(ArithmeticException e) { e.printStackTrace(); }' },
      { question: "Use finally block.", answer: 'try{...} catch(Exception e){...} finally{ System.out.println("Done"); }' },
      { question: "Throw a custom exception.", answer: 'throw new RuntimeException("Error");' }
    ]
  }
],

cpp: [
  { title: "Game Loop", desc: "Basic game loop.", qna: [
      { question: "Write a simple game loop.", answer: 'while(running){ update(); render(); }' },
      { question: "Limit loop with condition.", answer: 'while(lives>0){ ... }' },
      { question: "Explain infinite loop.", answer: 'Loop that never exits unless break or return is called.' }
    ]
  },
  { title: "STL Vector", desc: "Vector usage.", qna: [
      { question: "Create and print vector elements.", answer: 'std::vector<int> v = {1,2,3}; for(int x:v) std::cout<<x;' },
      { question: "Add element to vector.", answer: 'v.push_back(4);' },
      { question: "Remove last element.", answer: 'v.pop_back();' }
    ]
  },
  { title: "File IO", desc: "Read/write files.", qna: [
      { question: "Read a text file.", answer: '#include<fstream>\nstd::ifstream file("file.txt"); std::string line; while(std::getline(file,line)){std::cout<<line;}' },
      { question: "Write to a file.", answer: 'std::ofstream file("file.txt"); file << "Hello";' },
      { question: "Check if file opened successfully.", answer: 'if(!file.is_open()){ std::cout<<"Error"; }' }
    ]
  },
  { title: "Pointers", desc: "Pointer example.", qna: [
      { question: "Declare a pointer and assign value.", answer: 'int x = 10; int* p = &x;' },
      { question: "Dereference a pointer.", answer: 'std::cout << *p;' },
      { question: "Pointer arithmetic example.", answer: 'p++;' }
    ]
  },
  { title: "Multithreading", desc: "Thread usage.", qna: [
      { question: "Create a thread using std::thread.", answer: '#include<thread>\nstd::thread t([]{ std::cout<<"Hi"; }); t.join();' },
      { question: "Pass argument to thread.", answer: 'int x=5; std::thread t([](int a){std::cout<<a;}, x); t.join();' },
      { question: "Explain join vs detach.", answer: 'join waits for thread, detach runs independently.' }
    ]
  }
],

csharp: [
  { title: "Unity Script", desc: "MonoBehaviour script.", qna: [
      { question: "Create a Unity C# script with Start method.", answer: 'using UnityEngine;\npublic class MyScript : MonoBehaviour {\n  void Start(){Debug.Log("Hello");}\n}' },
      { question: "Move object in Update method.", answer: 'void Update(){ transform.Translate(Vector3.right * Time.deltaTime); }' },
      { question: "Explain MonoBehaviour.", answer: 'Base class from which every Unity script derives.' }
    ]
  },
  { title: "LINQ Query", desc: "LINQ usage.", qna: [
      { question: "Filter even numbers from list.", answer: 'var evens = numbers.Where(n => n%2==0);' },
      { question: "Sort a list using LINQ.", answer: 'var sorted = numbers.OrderBy(n => n);' },
      { question: "Select only names from objects.", answer: 'var names = people.Select(p=>p.Name);' }
    ]
  },
  { title: "Windows Form", desc: "Desktop UI starter.", qna: [
      { question: "Add a button and show message on click.", answer: 'Button btn = new Button(); btn.Click += (s,e)=>MessageBox.Show("Hi");' },
      { question: "Read input from textbox.", answer: 'string val = textBox1.Text;' },
      { question: "Close form programmatically.", answer: 'this.Close();' }
    ]
  },
  { title: "Timer", desc: "Scheduled tasks.", qna: [
      { question: "Set up timer that prints every second.", answer: 'System.Timers.Timer t = new System.Timers.Timer(1000); t.Elapsed += (s,e)=>Console.WriteLine("Tick"); t.Start();' },
      { question: "Stop timer after 5 ticks.", answer: 'int count=0; t.Elapsed+=(s,e)=>{count++;if(count==5)t.Stop();};' },
      { question: "Explain Timer.Elapsed event.", answer: 'Triggered every interval set in Timer.' }
    ]
  },
  { title: "API Call", desc: "HTTP request example.", qna: [
      { question: "Send GET request.", answer: 'using HttpClient client = new HttpClient(); var res = await client.GetStringAsync("url");' },
      { question: "Send POST request.", answer: 'var content = new StringContent(json, Encoding.UTF8,"application/json"); await client.PostAsync("url",content);' },
      { question: "Parse JSON response.", answer: 'var obj = JsonSerializer.Deserialize<MyClass>(res);' }
    ]
  }
],

rust: [
  { title: "Ownership Demo", desc: "Ownership & borrowing.", qna: [
      { question: "Move ownership of a String.", answer: 'let s1 = String::from("hi"); let s2 = s1;' },
      { question: "Borrow a reference to a String.", answer: 'fn print(s: &String){ println!("{}", s); }' },
      { question: "Mutable borrow example.", answer: 'fn modify(s: &mut String){ s.push_str("!"); }' }
    ]
  },
  { title: "Struct Impl", desc: "Struct with methods.", qna: [
      { question: "Define struct and method.", answer: 'struct Point{x:i32,y:i32} impl Point{fn print(&self){println!("{} {}",self.x,self.y);}}' },
      { question: "Create instance and call method.", answer: 'let p = Point{x:1,y:2}; p.print();' },
      { question: "Explain impl block.", answer: "Used to define methods on a struct." }
    ]
  },
  { title: "File Handling", desc: "Safe file IO.", qna: [
      { question: "Read a file safely.", answer: 'let content = std::fs::read_to_string("file.txt")?;' },
      { question: "Write to a file safely.", answer: 'std::fs::write("file.txt","Hello")?;' },
      { question: "Use Result to handle errors.", answer: 'fn read_file() -> Result<String,std::io::Error>{std::fs::read_to_string("file.txt")}' }
    ]
  },
  { title: "CLI App", desc: "Command-line tool.", qna: [
      { question: "Read command-line args.", answer: 'let args: Vec<String> = std::env::args().collect();' },
      { question: "Print usage if no args.", answer: 'if args.len() < 2 { println!("Usage: ..."); }' },
      { question: "Sum numbers from args.", answer: 'let sum:i32 = args[1..].iter().map(|x|x.parse::<i32>().unwrap()).sum();' }
    ]
  },
  { title: "Concurrency", desc: "Thread-safe concurrency.", qna: [
      { question: "Spawn threads.", answer: 'use std::thread; thread::spawn(|| println!("Hi"));' },
      { question: "Mutex example.", answer: 'use std::sync::Mutex; let data = Mutex::new(0);' },
      { question: "Explain Send and Sync traits.", answer: 'Send allows ownership transfer, Sync allows shared references safely.' }
    ]
  }
],

swift: [
  { title: "UIViewController", desc: "iOS screen starter.", qna: [
      { question: "Create subclass of UIViewController.", answer: 'class MyVC: UIViewController { override func viewDidLoad() { super.viewDidLoad() } }' },
      { question: "Add a button programmatically.", answer: 'let btn = UIButton(); view.addSubview(btn)' },
      { question: "Override viewWillAppear.", answer: 'override func viewWillAppear(_ animated: Bool){ super.viewWillAppear(animated) }' }
    ]
  },
  { title: "TableView", desc: "List UI.", qna: [
      { question: "Set up UITableView.", answer: 'let tv = UITableView(); tv.dataSource = self; view.addSubview(tv)' },
      { question: "Implement numberOfRowsInSection.", answer: 'func tableView(_ tableView: UITableView, numberOfRowsInSection section:Int)->Int{return 10}' },
      { question: "Explain cell reuse.", answer: 'Use dequeueReusableCell(withIdentifier:) to reuse cells efficiently.' }
    ]
  },
  { title: "Networking", desc: "API request.", qna: [
      { question: "Send GET request using URLSession.", answer: 'URLSession.shared.dataTask(with:url){data,response,error in ...}.resume()' },
      { question: "Parse JSON response.", answer: 'let obj = try JSONDecoder().decode(MyType.self, from: data)' },
      { question: "Handle network errors.", answer: 'if let error = error { print(error) }' }
    ]
  },
  { title: "Animations", desc: "Basic animations.", qna: [
      { question: "Animate view movement.", answer: 'UIView.animate(withDuration:1.0){ view.frame.origin.x += 100 }' },
      { question: "Fade in/out view.", answer: 'UIView.animate(withDuration:1.0){ view.alpha = 0 }' },
      { question: "Chain animations.", answer: 'UIView.animate(withDuration:1.0, animations:{...}, completion:{_ in UIView.animate(...)})' }
    ]
  },
  { title: "UserDefaults", desc: "Save settings.", qna: [
      { question: "Save string in UserDefaults.", answer: 'UserDefaults.standard.set("value", forKey:"key")' },
      { question: "Retrieve value from UserDefaults.", answer: 'let val = UserDefaults.standard.string(forKey:"key")' },
      { question: "Remove a key.", answer: 'UserDefaults.standard.removeObject(forKey:"key")' }
    ]
  }
],

sql: [
  { title: "SELECT Query", desc: "Basic SELECT.", qna: [
      { question: "Select all columns.", answer: 'SELECT * FROM table;' },
      { question: "Filter rows with WHERE.", answer: 'SELECT * FROM table WHERE column>10;' },
      { question: "Order results by column.", answer: 'SELECT * FROM table ORDER BY column ASC;' }
    ]
  },
  { title: "JOIN Tables", desc: "JOIN example.", qna: [
      { question: "INNER JOIN example.", answer: 'SELECT * FROM t1 INNER JOIN t2 ON t1.id=t2.id;' },
      { question: "LEFT JOIN vs RIGHT JOIN.", answer: 'LEFT returns all left rows, RIGHT returns all right rows.' },
      { question: "Join 3 tables.", answer: 'SELECT * FROM t1 JOIN t2 ON ... JOIN t3 ON ...;' }
    ]
  },
  { title: "CREATE TABLE", desc: "Create table.", qna: [
      { question: "Create table with 3 columns.", answer: 'CREATE TABLE t1(id INT, name VARCHAR(50), age INT);' },
      { question: "Set PRIMARY KEY.", answer: 'CREATE TABLE t1(id INT PRIMARY KEY, name VARCHAR(50));' },
      { question: "Add NOT NULL constraint.", answer: 'CREATE TABLE t1(id INT NOT NULL, name VARCHAR(50));' }
    ]
  },
  { title: "Indexes", desc: "Optimize queries.", qna: [
      { question: "Create an index.", answer: 'CREATE INDEX idx_name ON t1(column);' },
      { question: "UNIQUE vs regular index.", answer: 'UNIQUE prevents duplicates, regular allows duplicates.' },
      { question: "Drop index.", answer: 'DROP INDEX idx_name;' }
    ]
  },
  { title: "Transactions", desc: "ACID example.", qna: [
      { question: "Start transaction.", answer: 'BEGIN TRANSACTION;' },
      { question: "Commit transaction.", answer: 'COMMIT;' },
      { question: "Rollback transaction.", answer: 'ROLLBACK;' }
    ]
  }
],

go: [
  { title: "HTTP Server", desc: "REST API server.", qna: [
      { question: "Basic HTTP server.", answer: 'http.HandleFunc("/", func(w http.ResponseWriter,r *http.Request){w.Write([]byte("Hi"))}); http.ListenAndServe(":8080",nil)' },
      { question: "Handle GET request.", answer: 'func handler(w http.ResponseWriter,r *http.Request){fmt.Fprintln(w,"Hello")}' },
      { question: "Explain http.HandleFunc.", answer: 'Registers a function to handle requests at a path.' }
    ]
  },
  { title: "Goroutines", desc: "Concurrency example.", qna: [
      { question: "Launch goroutine.", answer: 'go func(){ fmt.Println("Hi") }()' },
      { question: "Use WaitGroup.", answer: 'var wg sync.WaitGroup; wg.Add(1); go func(){ wg.Done() }(); wg.Wait()' },
      { question: "Goroutine vs thread.", answer: 'Goroutines are lightweight, threads are OS-level.' }
    ]
  },
  { title: "JSON Handling", desc: "Encode/decode JSON.", qna: [
      { question: "Marshal struct to JSON.", answer: 'b,_:=json.Marshal(obj)' },
      { question: "Unmarshal JSON to struct.", answer: 'json.Unmarshal(b,&obj)' },
      { question: "Handle JSON errors.", answer: 'if err!=nil { fmt.Println(err) }' }
    ]
  },
  { title: "CLI Flags", desc: "Command-line flags.", qna: [
      { question: "Read flags.", answer: 'var name=flag.String("name","default","desc"); flag.Parse()' },
      { question: "Default values.", answer: 'flag.String("key","default","desc")' },
      { question: "Boolean flags.", answer: 'var b=flag.Bool("b",false,"desc"); flag.Parse()' }
    ]
  },
  { title: "Unit Test", desc: "Testing skeleton.", qna: [
      { question: "Write basic test.", answer: 'func TestX(t *testing.T){ if 1!=1 { t.Error("Fail") } }' },
      { question: "Use t.Error for failure.", answer: 't.Error("message")' },
      { question: "Explain testing package.", answer: 'Provides tools for unit tests using functions starting with Test*' }
    ]
  }
],

kotlin: [
  { title: "Activity Starter", desc: "Android activity.", qna: [
      { question: "Create MainActivity.", answer: 'class MainActivity : AppCompatActivity() { override fun onCreate(savedInstanceState: Bundle?){ super.onCreate(savedInstanceState) } }' },
      { question: "Add button click listener.", answer: 'button.setOnClickListener{ println("Clicked") }' },
      { question: "Override onCreate.", answer: 'override fun onCreate(...) { println("Hi") }' }
    ]
  },
  { title: "RecyclerView", desc: "Efficient lists.", qna: [
      { question: "Set up RecyclerView adapter.", answer: 'class MyAdapter: RecyclerView.Adapter<MyViewHolder>(){...}' },
      { question: "Bind view holder.", answer: 'override fun onBindViewHolder(holder:MyViewHolder,pos:Int){...}' },
      { question: "Return item count.", answer: 'override fun getItemCount() = data.size' }
    ]
  },
  { title: "Coroutines", desc: "Async tasks.", qna: [
      { question: "Launch coroutine.", answer: 'GlobalScope.launch{ println("Hi") }' },
      { question: "Use async/await.", answer: 'val deferred = async{1}; runBlocking{ println(deferred.await()) }' },
      { question: "Delay in coroutine.", answer: 'delay(1000)' }
    ]
  },
  { title: "Retrofit", desc: "API calls.", qna: [
      { question: "Create Retrofit instance.", answer: 'val retrofit = Retrofit.Builder().baseUrl(url).build()' },
      { question: "Define API interface.", answer: 'interface Api { @GET("path") suspend fun get(): Response<Data> }' },
      { question: "Execute API call.", answer: 'val data = api.get()' }
    ]
  },
  { title: "Data Class", desc: "Model class.", qna: [
      { question: "Define a data class.", answer: 'data class User(val name:String,val age:Int)' },
      { question: "Copy object with modification.", answer: 'val u2 = u1.copy(age=30)' },
      { question: "Destructure data class.", answer: 'val (n,a) = u1' }
    ]
  }
]
};

document.addEventListener("DOMContentLoaded", () => {
  const featureList = document.getElementById("featureList");
  const featureTitle = document.getElementById("featureTitle");
  const featureDesc = document.getElementById("featureDescription");
  const answerInput = document.getElementById("answerInput");
  const answerOutput = document.getElementById("answerOutput");
  const generateBtn = document.getElementById("generateBtn");
  const creditScoreEl = document.getElementById("creditScore");
  const achievementsTab = document.getElementById("achievementsTab");

  let selectedFeature = null;
  let creditScore = 0;
  let achievements = [];
  let selectedLang = "html"; // default

  function loadFeatures(lang) {
    selectedLang = lang;
    featureList.innerHTML = "";
    FEATURES[lang].forEach(f => {
      const div = document.createElement("div");
      div.className = "feature-item";
      div.textContent = f.title;
      div.onclick = () => {
        selectedFeature = f.title;
        featureTitle.textContent = f.title;
        featureDesc.textContent = f.desc;
        answerInput.value = "";
        answerOutput.value = "";
      };
      featureList.appendChild(div);
    });
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadFeatures(btn.dataset.lang);
      answerInput.value = "";
      answerOutput.value = "";
      selectedFeature = null;
    };
  });

  loadFeatures(selectedLang);

  generateBtn.onclick = () => {
    if (!selectedFeature) return alert("Select a feature first!");

    const featureAnswers = answers[selectedLang].find(f => f.title === selectedFeature);
    if (!featureAnswers || !featureAnswers.qna) return alert("No questions available for this feature!");

    const randomQA = featureAnswers.qna[Math.floor(Math.random() * featureAnswers.qna.length)];

    answerInput.value = randomQA.question;
    answerOutput.value = randomQA.answer;

    creditScore += 10;
    creditScoreEl.textContent = creditScore;

    if (creditScore % 50 === 0) {
      const badge = `Badge ${achievements.length + 1}`;
      achievements.push(badge);
      const badgeEl = document.createElement("div");
      badgeEl.className = "achievement-badge";
      badgeEl.textContent = badge;
      achievementsTab.appendChild(badgeEl);
    }
  };
}); // <-- Make sure this closes the DOMContentLoaded callback
