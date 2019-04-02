
#include<iostream>
#include<fstream>
#include<stack>
#include<vector>
#include<map>
#include<string>

using namespace std;
class Func
{
public:
  string ret_type;
  string name;
  string params;
  double call_addr;
  int def_line_no;
};

vector<string> file;
vector<Func> function_desc;

void check_inside(int line_no,stack<Func> s1)
{
  int j=line_no+1,i;
  while(1)
  {
    if(file[j]=="}")
      break;
    string line=file[j];
    for(i=0;i<function_desc.size();i++)
    {
      if(line.find(function_desc[i].name+"(")<line.size())
      {
        //cout<<"inside check";
        s1.push(function_desc[i]);
        cout<<"push "<<function_desc[i].name<<endl;
        check_inside(function_desc[i].def_line_no,s1);
        cout<<"pop "<<function_desc[i].name<<endl;
        s1.pop();
        break;
        //cout<<line<<endl;
      }
    }
    j++;
  }
}

int main()
{
  ifstream f("code.txt");


  vector<string> function_definitions;
  vector<vector<string> > functions;
  stack<Func> s1;
  //f.open("code.txt","r");
  string line;
  while(getline(f,line))
  {
    file.push_back(line);
    if(line=="//definition starts")
      break;
    //cout<<line;
    Func f1;
    f1.ret_type=line.substr(0,line.find(" "));
    f1.name=line.substr(line.find(" ")+1,line.find("(")-line.find(" ")-1);
    //cout<<f1.name;
    string substr=line.substr(line.find("(")+1,line.find(")")-line.find("(")-1);
    //cout<<endl<<substr<<endl;
    f1.params=substr;
    function_desc.push_back(f1);
  }

  bool flag=false;
  while(getline(f,line))
  {
    if(line=="//main starts")
    {
      file.push_back(line);
      break;
    }
    if(line=="{")
      flag=true;

    if(flag==false)
    {
    string name;
    name=line.substr(line.find(" ")+1,line.find("(")-line.find(" ")-1);
    //cout<<endl<<name;
    for(int i=0;i<function_desc.size();i++)
    {
      if(function_desc[i].name==name)
      {
        //cout<<file.size();
        function_desc[i].def_line_no=file.size();
      }
    }
    }
    if(line=="}")
      flag=false;
    file.push_back(line);
  }
  while(getline(f,line))
  {
    int i;
    for(i=0;i<function_desc.size();i++)
    {
      if(line.find(function_desc[i].name+"(")<line.size())
      {
        s1.push(function_desc[i]);
        cout<<"push "<<function_desc[i].name<<endl;
        check_inside(function_desc[i].def_line_no,s1);
        cout<<"pop "<<function_desc[i].name<<endl;
        s1.pop();
        break;
      }
    }
    //cout<<"pop "<<cout<<"push "<<function_desc[i].name;

  }
}

