#include <iostream>
#include <fstream>
#include <vector>
#include <memory>

class Triangle;
struct Point;

typedef std::unique_ptr<Point> PointSP;
typedef std::unique_ptr<Triangle>  TriangleSP;

struct Point
{
    double x = 0.0;
    double y = 0.0;
    double z = 0.0;
};

class Triangle
{
    public:
        Triangle() = default;
        Triangle(PointSP &p_iVertex1, PointSP &p_iVertex2, PointSP &p_iVertex3);
        Triangle(std::vector<PointSP> p_iInputVector);

        virtual void Set(Point &p_iVertex1, Point &p_iVertex2, Point &p_iVertex3) = 0;
        virtual std::vector<PointSP> Get() = 0;

    private:
        std::vector<PointSP> m_dataVector;
};

int main(int argc, char** argv)
{
    std::cout << "Hello World!" << endl;
    return 0;
}
